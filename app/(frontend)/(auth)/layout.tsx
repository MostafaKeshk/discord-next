import MessagesSVG from "@/shared/components/svgs/Messages";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="h-screen grid grid-cols-2">
        <div className="h-100 flex items-center justify-center flex-col">
          {children}
        </div>
        <div className="h-100 flex items-center justify-center overflow-hidden">
          <MessagesSVG />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
