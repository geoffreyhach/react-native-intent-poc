// ** React imports
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// ** hooks imports
import useGetShare from '../hooks/useGetShare';
import {colors} from '../style/colors';
import AppButton from '../components/AppButton';

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

const TransferPdfView = (props: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [files, setFiles] = useGetShare();

  const renderFile = (file: ShareFile, index: number) => {
    return (
      <View style={styles.fileContainer}>
        <Icon name="upload-file" color={colors.primary.main} size={18} />
        <View style={{flex: 1}}>
          <Text>{file.fileName}</Text>
          <Text style={{color: 'grey'}}>
            100kb {isSending && '- envoi en cours'}
          </Text>
        </View>
        <Icon
          name="delete"
          color={colors.grey.main}
          size={18}
          onPress={() => setFiles(undefined)}
        />
      </View>
    );
  };

  console.log('files', files);

  if (files)
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Envoyez votre biologie</Text>
        </View>
        {files.map((file: ShareFile, index: number) => (
          <View key={index}>{renderFile(file, index)}</View>
        ))}
        <TextInput
          style={styles.textInput}
          placeholder="Votre email"
          onChangeText={(newText: string) => setEmail(newText)}
          defaultValue={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Le mot de passe du document PDF (si necessaire)"
          onChangeText={(newText: string) => setPassword(newText)}
          defaultValue={password}
        />
        <AppButton
          onPress={() => setIsSending(!isSending)}
          title="Envoyer"
          loading={isSending}
          width={250}
        />
        {isSending && (
          <AppButton
            onPress={() => setIsSending(false)}
            title="Annuler"
            type="clear"
          />
        )}
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  titleContainer: {
    alignSelf: 'center',
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
    width: '90%',
    margin: 'auto',
  },
  fileContainer: {
    width: '90%',
    padding: 5,
    gap: 20,
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.grey.light,
    borderRadius: 5,
  },
});

export default TransferPdfView;
