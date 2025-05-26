import React, {useEffect} from 'react';
import {Box, Text, Button, HStack} from '@gluestack-ui/themed';
import {TaskItemProps} from '../types/types';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../styles/colors';

/**
 * Component to render a single task item with animation.
 * @param {{task: Task, onToggle: (id: string, completed: boolean) => void, onRemove: (id: string) => void}} props
 * @returns {JSX.Element}
 */
export default function TaskItem({task, onRemove}: TaskItemProps) {
  const translateX = useSharedValue(-20);
  const opacity = useSharedValue(0);
  const DURATION = 350;

  useEffect(() => {
    translateX.value = withTiming(0, {duration: DURATION});
    opacity.value = withTiming(1, {duration: DURATION});
  }, [opacity, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
    opacity: opacity.value,
    marginBottom: 8,
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Box
        borderRadius="$lg"
        padding="$4"
        bg={'$green100'}>
        <HStack alignItems="center" justifyContent="space-between">
          <Box flex={1} marginLeft="$3">
            <Text
              fontSize="$md"
              color={'$textLight400'}
            >
            {task.latitude}
            </Text>

            <Text
              fontSize="$sm"
              color={'$textLight300'}
            >
              {task.longitude}
            </Text>
            <Text
              fontSize="$sm"
              color={'$textLight300'}
            >
              {task.createdAt.toLocaleDateString()}
            </Text>
          </Box>

          <Button
            onPress={() => onRemove(task.id)}
            bg="transparent"
            justifyContent="center"
            alignItems="center"
            padding="$2"
            marginLeft="$2">
            <Icon name="delete" size={24} color={colors.red} />
          </Button>
        </HStack>
      </Box>
    </Animated.View>
  );
}
