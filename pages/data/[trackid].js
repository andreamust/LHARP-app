import { useRouter } from "next/router";

function TrackPage() {
  const router = useRouter();
  return <div>{router.query.trackid}</div>;
}

export default TrackPage;
