export default function AboutRoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  return <div>AboutRoomPage ID: {params.roomId}</div>;
}
