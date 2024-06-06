import { Link } from "@/components/Link/Link";

export default function IndexPage() {
  return (
    <main>
      Hello World <br />
      <Link href={"/init-data"}>Init Data</Link> <br />
      <Link href={"/launch-params"}>Launch Params</Link> <br />
    </main>
  );
}
