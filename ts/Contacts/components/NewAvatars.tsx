import React, { useEffect, useRef, useState } from 'react'
import { Animated, FlatList, LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent, ViewProps } from 'react-native'
import styled from 'styled-components/native'
import rem from '~/styles/rem'
import { Contact } from '../types'
import AvatarItem from './AvatarItem'

interface Props extends ViewProps {
  items: Contact[]
  isGuided: boolean
  currentPosition: Animated.Value
  jumpPosition: Animated.Value
  onScrollPosition: ({ realIndex }: { realIndex: number }) => void
  onScrollState: (isScrolling: boolean) => void
  onJumpToIndex: (index: number) => void
}

export default (props: Props) => {
  const { currentPosition, isGuided, onJumpToIndex, jumpPosition } = props
  const [width, setWidth] = useState<number>(0)
  const [itemWidth, setItemWidth] = useState<number>(0)
  const [itemMargin, setItemMargin] = useState<number>(0)
  const scrollRef = useRef<FlatList>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const sListener = currentPosition.addListener((position) => {
      if (isGuided && scrollRef.current && (scrollRef.current.props.data?.length ?? 0) > 0) {
        const offset = position.value * itemWidth
        scrollRef.current.scrollToOffset({ offset, animated: false })
      }
    })

    const jListener = jumpPosition.addListener((position) => {
      if (scrollRef.current && (scrollRef.current.props.data?.length ?? 0) > 0) {
        const offset = position.value * itemWidth
        scrollRef.current.scrollToOffset({ offset, animated: true })
      }
    })

    return () => {
      currentPosition.removeListener(sListener)
      jumpPosition.removeListener(jListener)
    }
  })

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setItemWidth(rem(80) + itemMargin * 2)
    setItemMargin((nativeEvent.layout.width - rem(80) * 4.5) / 8)
    setWidth(nativeEvent.layout.width)
  }

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = event.nativeEvent.contentOffset.x / itemWidth
    setCurrentIndex(Math.round(index))
    if (!isGuided) {
      props.onScrollPosition({ realIndex: index })
    }
  }

  const onScrollStart = () => props.onScrollState(true)
  const onScrollEnd = () => props.onScrollState(false)
  return (
    <FlatList
      {...props}
      data={props.items}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={itemWidth}
      snapToAlignment={'start'}
      ref={scrollRef}
      onScrollBeginDrag={onScrollStart}
      onMomentumScrollEnd={onScrollEnd}
      onScroll={onScroll}
      scrollEventThrottle={16}
      onLayout={onLayout}
      contentContainerStyle={{
        paddingHorizontal: (width - itemWidth) / 2,
      }}
      keyExtractor={(_, index) => `avatar-${index}`}
      renderItem={({ item, index }: { item: Contact; index: number }) =>
        itemMargin == 0 ? null : (
          <Avatar
            contact={item}
            isSelected={index == currentIndex}
            margin={itemMargin}
            onSelected={() => onJumpToIndex(index)}
          />
        )
      }
    />
  )
}

const Avatar = styled(AvatarItem)<{ margin: number }>`
  margin-left: ${(props) => props.margin}px;
  margin-right: ${(props) => props.margin}px;
`
