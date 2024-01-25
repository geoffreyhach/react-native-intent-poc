import {useEffect, useState} from 'react';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';

export type ShareFile = {
  filePath?: string;
  text?: string;
  weblink?: string;
  mimeType?: string;
  contentUri?: string;
  fileName?: string;
  extension?: string;
};

export default function useGetShare(): [
  ShareFile[] | undefined,
  React.Dispatch<React.SetStateAction<ShareFile[] | undefined>>,
] {
  const [files, setFiles] = useState<ShareFile[] | undefined>([
    {fileName: 'titre defaut'},
  ]);

  useEffect(() => {
    console.log('fired');
    // To get All Recived Urls
    ReceiveSharingIntent.getReceivedFiles(
      (files: ShareFile[]) => {
        console.log('Sharing intent callback fired');
        console.log('quoi', files);
        setFiles(files);
      },
      (error: any) => {
        console.log(error);
      },
      'ShareMedia', // share url protocol (must be unique to your app, suggest using your apple bundle id)
    );
  }, []);

  return [files, setFiles];
}
