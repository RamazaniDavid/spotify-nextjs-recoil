import SmartLayout from "libs/layout/src/lib/smart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function Index() {
  return <SmartLayout ></SmartLayout>
}



export default Index;
