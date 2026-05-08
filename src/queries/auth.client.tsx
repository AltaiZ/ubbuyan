import { useQuery } from '@apollo/client/react';
import { queries } from '@/graphql/auth';
import { useSetAtom, useAtom, useAtomValue } from 'jotai';
import {
  currentUserAtom,
  loadingUserAtom,
  refetchCurrentUserAtom,
} from '@/store/auth.store';
import { useEffect } from 'react';
import { toast } from 'sonner';

export const useCurrentUser = (onCompleted?: (data: any) => void) => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const [loading, setLoading] = useAtom(loadingUserAtom);
  const [refetchUser, setRefetchUser] = useAtom(refetchCurrentUserAtom);

  const { data, error, refetch } = useQuery<any>(queries.currentUser);

  useEffect(() => {
    if (error) {
      setLoading(false);
      if (error.message === 'token expired') {
        return sessionStorage.removeItem('token');
      }
      if (error.message === 'User is not logged in') {
        onCompleted && onCompleted(null);
        return setCurrentUser(null);
      }
      toast.error(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      const { clientPortalCurrentUser } = data;
      setCurrentUser(clientPortalCurrentUser);
      setLoading(false);
      onCompleted && onCompleted(clientPortalCurrentUser);
    }
  }, [data]);

  useEffect(() => {
    if (refetchUser) {
      refetch();
      setRefetchUser(false);
    }
  }, [refetchUser]);

  return { currentUser, loading, setLoading };
};

export const useUserDetail = () => {
  const refetchUser = useAtomValue(refetchCurrentUserAtom);
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const { data, loading, refetch } = useQuery<any>(queries.userDetail);

  useEffect(() => {
    if (data?.clientPortalCurrentUser) {
      const { clientPortalCurrentUser } = data;
      setCurrentUser({ ...currentUser, ...clientPortalCurrentUser });
    }
  }, [data]);

  useEffect(() => {
    if (refetchUser) {
      refetch();
    }
  }, [refetchUser]);
  return { loading };
};
