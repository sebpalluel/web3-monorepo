import React, { useEffect, useMemo, useState } from 'react';
import styles from './Biconomy.module.css';
import { Button, Text } from '@chakra-ui/react';
import { emojiAvatarForAddress } from '@client/ui/shared';
import useScw from '@client/biconomy/scw';
import { useSession } from 'next-auth/react';

type AvatarComponent = React.FC<{
  address: string;
  image?: string;
  size: number;
}>;

export const EmojiAvatar: AvatarComponent = ({ address, image, size }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (image) {
      const img = new Image();
      img.src = image;
      img.onload = () => setLoaded(true);
    }
  }, [image]);

  const { color: backgroundColor, emoji } = useMemo(
    () => emojiAvatarForAddress(address as string),
    [address]
  );
  return image ? (
    loaded ? (
      <span
        className={styles.avatar}
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          height: size,
          width: size,
        }}
      />
    ) : (
      <span
        className={styles.avatar}
        style={{
          height: size,
          width: size,
        }}
      >
        {/* <SpinnerIcon /> */}
      </span>
    )
  ) : (
    <span
      className={styles.avatar}
      style={{
        ...(!image && { backgroundColor }),
        height: size,
        width: size,
      }}
    >
      <span className={styles.emoji}>{emoji}</span>
    </span>
  );
};

type AccountInfoProps = {
  smartAccountAddress: string;
  session: any;
  disconnectWeb3: () => void;
};

const AccountInfo = ({
  smartAccountAddress,
  session,
  disconnectWeb3,
}: AccountInfoProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <EmojiAvatar
          address={smartAccountAddress as string}
          size={50}
          image={session?.user?.image as string}
        />
      </div>
      <div className={styles.textContainer}>
        <small>Signed in as</small>
        <strong className={styles.displayName}>
          {session?.user?.email || session?.user?.name || smartAccountAddress}
        </strong>
      </div>
      <div className={styles.buttonContainer}>
        <a className={styles.button} onClick={disconnectWeb3}>
          Sign out
        </a>
      </div>
    </div>
  );
};

export const Biconomy = () => {
  const {
    connectWeb3,
    disconnectWeb3,
    smartAccountAddress,
    smartAccountLoading,
    signoutLoading,
    siweLoading,
  } = useScw();
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <>
        <Text noOfLines={1}>You are not signed in</Text>
        <Button
          isLoading={smartAccountLoading || status === 'loading' || siweLoading}
          loadingText="Signing in..."
          bg={'blue.400'}
          color={'white'}
          onClick={connectWeb3}
          _hover={{
            bg: 'blue.500',
          }}
        >
          Sign in
        </Button>
      </>
    );
  }
  return signoutLoading || !session?.user ? (
    <>
      <span className={styles.signedInText}>
        <small>Signing out...</small>
      </span>
      <div style={{ padding: '1.2rem' }}></div>
    </>
  ) : (
    <AccountInfo
      smartAccountAddress={smartAccountAddress as string}
      session={session}
      disconnectWeb3={disconnectWeb3}
    />
  );
};

export default Biconomy;
