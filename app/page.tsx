import Navbar from "./_components/Navbar";
import EducationSection from "./_components/Education";
import ContactSection from "./_components/Contact";
import ExperienceSection from "./_components/Experience";

const getLandingPageData = async () => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}`;
  let req = await fetch(url, { next: { revalidate: 10 } });

  const storyData = await req.json();
  const {
    nav_section,
    contact_section,
    education_section,
    experience_section,
  } = storyData.story.content;

  return {
    nav_section: nav_section[0],
    education_section: education_section[0],
    experience_section: experience_section[0],
    contact_section: contact_section[0],
  };
};

export default async function Home() {
  const storyData = await getLandingPageData();

  return (
    <>
      <Navbar data={storyData.nav_section} />
      <ExperienceSection data={storyData.experience_section} />
      <EducationSection data={storyData.education_section} />
      <ContactSection data={storyData.contact_section} />
    </>
  );
}
