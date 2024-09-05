import { ExtendedButton } from '#components/ExtendedButton';
import { GamePhaseStep } from '#models/GamePhase';
import { useCallback, useRef } from 'react';
import { Dimensions, Keyboard, Text, ScrollView, View } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetView } from '@gorhom/bottom-sheet';
import { ExtendedTextInput } from '#components/ExtendedTextInput';
import { TextInput } from 'react-native-gesture-handler';

export type GameToolbarProps = {
  currentPhaseStep: GamePhaseStep;
};

const FIRST_SNAP_POINT = 150;
const SECOND_SNAP_POINT = Dimensions.get('window').height * 0.8;
const SNAP_POINTS = [FIRST_SNAP_POINT, SECOND_SNAP_POINT] as const;

export const GameToolbar = ({ currentPhaseStep }: GameToolbarProps) => {
  const inputRef = useRef<TextInput>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop opacity={0.4} pressBehavior="collapse" onPress={Keyboard.dismiss} {...props} />
    ),
    [],
  );

  const onSheetSnapPointChange = useCallback((index: number) => {
    if (index === 0) {
      Keyboard.dismiss();
      return;
    }

    if (index === 1) {
      inputRef.current?.focus();
      return;
    }
  }, []);

  const onNotesInputFocus = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const onNotesInputBlur = useCallback(() => {
    // TODO: save notes state to the redux store
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={onSheetSnapPointChange}
      snapPoints={SNAP_POINTS}
      handleComponent={null}
      backdropComponent={renderBackdrop}
      style={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
    >
      <BottomSheetView className="flex-1 bg-grey900  rounded-2xl border-grey700 border-2">
        <ScrollView className="flex-1" contentContainerClassName="px-6 py-4" scrollEnabled={false}>
          <Text className="text-grey050 font-inter-bold text-md">Mafia Time</Text>
          <View className="py-4">
            <ExtendedButton type="primary" title="Timer zone will be here" onPress={() => console.log('press')} />
          </View>
          <ExtendedTextInput
            ref={inputRef}
            placeholder="Start typing here..."
            multiline
            onFocus={onNotesInputFocus}
            onBlur={onNotesInputBlur}
            style={{ height: FIRST_SNAP_POINT }}
          />
        </ScrollView>
      </BottomSheetView>
    </BottomSheet>
  );
};
