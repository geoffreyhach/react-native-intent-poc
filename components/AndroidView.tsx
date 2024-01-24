import React from 'react';

import {View, Text, Image, StyleSheet, Button} from 'react-native';

import useGetShare from '../src/useGetShare';

type Props = {};

export type ShareFile = {
  filePath?: string;
  text?: string;
  weblink?: string;
  mimeType?: string;
  contentUri?: string;
  fileName?: string;
  extension?: string;
};

const AndroidView = (props: Props) => {
  const [files, setFiles] = useGetShare();

  const renderFile = (file: ShareFile, index: number) => {
    return (
      <View style={styles.fileContainer}>
        <Text>{file.fileName}</Text>
        <Button title="suppr" onPress={() => setFiles(undefined)} />
      </View>
    );
    // return Object.keys(file).map((key: string, i: number) => {
    //   if (file[key as keyof typeof file]) {
    //     return (
    //       <Text key={key}>
    //         {key} : {file[key as keyof typeof file]}
    //       </Text>
    //     );
    //   }
    // });
  };

  console.log('files', files);

  if (files)
    return (
      <View style={styles.container}>
        <Text>Envoyez votre biologie</Text>
        {files.map((file: ShareFile, index: number) => (
          <View key={index}>{renderFile(file, index)}</View>
        ))}
        <Button onPress={() => console.log('sent')} title="Envoyer" />
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 'auto',
  },
  container: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
  },
  fileContainer: {
    width: '90%',
    backgroundColor: 'lightgrey',
    padding: 5,
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default AndroidView;
