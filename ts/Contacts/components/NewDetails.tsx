import React, { useEffect, useRef, useState } from 'react'
import { Animated, FlatList, LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent, ViewProps } from 'react-native'
import styled from 'styled-components/native'
import { Contact } from '../types'
import DetailsItem from './DetailsItem'

interface Props extends ViewProps {
  items: Contact[]
  isGuided: boolean
  currentPosition: Animated.Value
  jumpPosition: Animated.Value
  onScrollPosition: ({ realIndex }: { realIndex: number }) => void
  onScrollState: (isScrolling: boolean) => void
}

export default (props: Props) => {
  const { currentPosition, isGuided, jumpPosition } = props
  const [height, setHeight] = useState<number>(0)
  const scrollRef = useRef<FlatList>(null)

  useEffect(() => {
    const sListener = currentPosition.addListener((position) => {
      if (isGuided && scrollRef.current && (scrollRef.current.props.data?.length ?? 0) > 0) {
        const offset = position.value * height
        scrollRef.current.scrollToOffset({ offset, animated: false })
      }
    })

    const jListener = jumpPosition.addListener((position) => {
      if (scrollRef.current && (scrollRef.current.props.data?.length ?? 0) > 0) {
        const offset = position.value * height
        scrollRef.current.scrollToOffset({ offset, animated: true })
      }
    })

    return () => {
      currentPosition.removeListener(sListener)
      jumpPosition.removeListener(jListener)
    }
  })

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setHeight(nativeEvent.layout.height)
  }

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!isGuided) {
      const index = event.nativeEvent.contentOffset.y / height
      props.onScrollPosition({ realIndex: index })
    }
  }

  const onScrollStart = () => props.onScrollState(true)
  const onScrollEnd = () => props.onScrollState(false)

  return (
    <FlatList
      {...props}
      data={props.items}
      showsVerticalScrollIndicator={false}
      pagingEnabled
      snapToInterval={height}
      snapToAlignment={'center'}
      ref={scrollRef}
      onScrollBeginDrag={onScrollStart}
      onMomentumScrollEnd={onScrollEnd}
      onScroll={onScroll}
      scrollEventThrottle={16}
      onLayout={onLayout}
      keyExtractor={(_, index) => `details-${index}`}
      renderItem={({ item, index }: { item: Contact; index: number }) =>
        height == 0 ? null : <Details contact={item} height={height} />
      }
    />
  )
}

const Details = styled(DetailsItem)<{ height: number }>`
  height: ${(props) => props.height}px;
`
