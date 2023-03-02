import {useCallback} from 'react';
import {Linking, Pressable, Text} from 'react-native';
import React from 'react';

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      ('');
    }
  }, [url]);

  return (
    <Pressable onPress={handlePress} style={{alignSelf: 'center'}}>
      <Text> {children} </Text>
    </Pressable>
  );
};

export default OpenURLButton;
