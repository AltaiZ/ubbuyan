import { useMutation } from '@apollo/client/react';
import { mutations } from '../graphql/auth';
import { useSetAtom } from 'jotai';
import {
  loadingUserAtom,
  refetchCurrentUserAtom,
} from '@/store/auth.store';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';
import { onError } from '@/lib/utils';
import { onErrorLogin } from '@/lib/utils';

const clientPortalId = process.env.NEXT_PUBLIC_CP_ID;

type MutationOnCompleted = (data: any) => void;

interface ILoginData {
  token?: string;
  refetchToken?: string;
}

const useLoginCallback = () => {
  const router = useRouter();
  const from = useSearchParams().get('from');
  const triggerRefetchUser = useSetAtom(refetchCurrentUserAtom);
  const setLoadingUser = useSetAtom(loadingUserAtom);

  return {
    loginCallback: (
      { token, refetchToken }: ILoginData,
      callback?: () => void
    ) => {
      if (token) {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('refetchToken', refetchToken || '');
        triggerRefetchUser(true);
        setLoadingUser(true);
        toast.success('Сайн байна уу?', {
          description: 'Та амжилттай нэвтэрлээ',
        });

        router.push(from ? from : '/');
        !!callback && callback();
      }
    },
  };
};

export const useLogin = (onCompleted?: () => void) => {
  const { loginCallback } = useLoginCallback();

  const [login, { loading }] = useMutation<any>(mutations.login, {
    onCompleted: ({ clientPortalLogin }) => {
      loginCallback(clientPortalLogin, onCompleted);
    },
    onError: onErrorLogin,
  });

  return { login, loading, clientPortalId };
};

export const useGoogleLogin = () => {
  const { loginCallback } = useLoginCallback();
  const [googleLogin, { loading }] = useMutation<any>(mutations.googleLogin, {
    onCompleted({ clientPortalGoogleAuthentication }) {
      loginCallback(clientPortalGoogleAuthentication);
    },
    onError,
  });
  return { googleLogin, loading, clientPortalId };
};

export const useFacebookLogin = () => {
  const { loginCallback } = useLoginCallback();
  const [facebookLogin, { loading }] = useMutation<any>(mutations.fbLogin, {
    onCompleted({ clientPortalFacebookAuthentication }) {
      loginCallback(clientPortalFacebookAuthentication);
    },
    onError,
  });
  return { facebookLogin, loading, clientPortalId };
};


export const useRegister = (
  onCompleted?: MutationOnCompleted
) => {
  const [register, { loading }] = useMutation<any>(mutations.createUser, {
    onCompleted: (data) => {
      !!onCompleted && onCompleted(data);
    },
    onError,
  });

  return { register, loading, clientPortalId };
};

export const useVerify = (onCompleted?: MutationOnCompleted) => {
  const [verify, { loading }] = useMutation<any>(mutations.userVerify, {
    onCompleted: (data) => {
      !!onCompleted && onCompleted(data);
    },
    onError,
  });

  return { verify, loading, clientPortalId };
};

export const useUserEdit = () => {
  const setRefetchUser = useSetAtom(refetchCurrentUserAtom);
  const [editUser, { loading }] = useMutation<any>(mutations.userEdit, {
    onCompleted() {
      setRefetchUser(true);
      toast.success('Хувийн мэдээлэл шинэчлэгдсэн');
    },
    onError,
  });

  return { loading, editUser };
};


export const useForgotPassword = () => {
  const [forgotPassword, { loading, data }] = useMutation<any>(
    mutations.forgotPassword,
    {
      onError,
    }
  );

  const { clientPortalForgotPassword: success } = data || {};

  return { loading, forgotPassword, clientPortalId, success };
};

export const useChangePassword = () => {
  const [changePassword, { loading, data }] = useMutation<any>(
    mutations.userChangePassword,
    {
      onError,
    }
  );

  const { clientPortalUserChangePassword: success } = data || {};

  return { loading, changePassword, clientPortalId, success };
};

export const useResetPassword = () => {
  const [resetPassword, { loading, data }] = useMutation<any>(
    mutations.resetPassword,
    {
      onError,
    }
  );

  const { clientPortalResetPassword: success } = data || {};

  return { loading, resetPassword, clientPortalId, success };
};

export const useLogout = () => {
  const triggerRefetchUser = useSetAtom(refetchCurrentUserAtom);
  const [logout, { loading }] = useMutation<any>(mutations.logout, {
    onCompleted() {
      triggerRefetchUser(true);
    },
    onError,
  });

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refetchToken');
    logout();
  };

  return { loading, logout: handleLogout };
};
