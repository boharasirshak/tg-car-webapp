import { retrieveLaunchParams, useInitData } from "@tma.js/sdk-react";
import { useMemo, type ReactNode } from "react";

import { useDidMount } from "@/hooks/useDidMount";

export default function InitDataPage() {
  const didMount = useDidMount();
  const initData = useInitData(true);
  const initDataRaw = useMemo(
    () => (didMount ? retrieveLaunchParams().initDataRaw : ""),
    [didMount]
  );

  let contentNode: ReactNode;

  if (!initData) {
    contentNode = <i>Application was launched with missing init data</i>;
  } else {
    contentNode = <>Get Init Data</>;
  }

  return contentNode;
}
