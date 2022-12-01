import { useSession } from 'next-auth/react';
import { useGetUserQuery } from '@client/gql/user';

export default function MePage() {
  const { data } = useSession();
  const { data: userData } = useGetUserQuery({ id: data?.user?.id });

  return <pre>{JSON.stringify(userData, null, 2)}</pre>;
}
