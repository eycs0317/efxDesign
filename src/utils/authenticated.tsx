export async function getProfile(session) {
  let profile = await prisma.profile.findUnique({
    where: {
      uid: session.uid,
    },
  });
  profile.email = session.user.email;
  return profile;
}
