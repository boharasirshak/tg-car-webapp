import { retrieveLaunchParams } from "@tma.js/sdk-react";

import { useDidMount } from "@/hooks/useDidMount";
import { useMemo } from "react";

export default function LaunchParamsPage() {
  const didMount = useDidMount();
  const lp = useMemo(() => {
    return didMount ? retrieveLaunchParams() : ({} as Record<string, string>);
  }, [didMount]);

  return <>Get Launch Params</>;
}
