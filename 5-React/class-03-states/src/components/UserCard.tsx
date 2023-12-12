type Props = {
  name: string;
  avatar: string;
  bio: string;
};

export function UserCard({ name, avatar, bio }: Props) {
  return (
    <>
      <section style={{ textAlign: "center" }}>
        <h2>{name}</h2>
        <img src={avatar} alt="" width={240} />
        <p>{bio}</p>
      </section>
    </>
  );
}
