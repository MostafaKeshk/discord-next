import { useState } from "react";
import { useToast } from "@/shared/components/ui/use-toast";
import { signOut } from "next-auth/react";

const useCallApi = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const callApi = async (API: any, onSuccess: any, onError?: any) => {
    setLoading(true);
    try {
      const data = await API;
      onSuccess(data);
    } catch (error: any) {
      console.log({ error });
      if (onError) {
        onError();
      }

      if (error?.response?.status === 401) {
        toast({
          title: "Success",
          description: "Session Expired",
        });
        signOut();
      } else {
        toast({
          title: "Success",
          description: "Something went wrong",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { callApi, loading };
};

export default useCallApi;
