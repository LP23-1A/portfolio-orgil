import Layout from "@/components/Layout";
import FigmaIcon from "@/components/icons/FigmaIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import GreenDotIcon from "@/components/icons/GreenDotIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";

export default function Home() {
  return (
    <main className="px-8">
      <Layout>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="flex flex-col gap-8 text-center md:text-left">
            <div className="">
              <h1 className="text-[60px] font-semibold">
                Hi, I’m Sagar 👋
              </h1>
              <p className="w-2/3 mx-auto md:mx-0">
                I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
            </div>
            <div>
              <div className="flex">
                <LocationIcon />
                <span>Ahmedabad, India</span>
              </div>
              <div className="flex">
                <GreenDotIcon />
                <span>Available for new projects</span>
              </div>
            </div>
            <div className="flex gap-4">
              <GithubIcon />
              <TwitterIcon />
              <FigmaIcon />
            </div>
          </div>
          <div className="max-w-[400px] mb-12 md:mb-0">
            <img src="https://s3-alpha-sig.figma.com/img/f85c/f455/11cd2ba02a83d564218d6500a134a91d?Expires=1702252800&Signature=TRYpbY8V8F8ROOxlZuSsQLFpQmvUjfFqQ~dZqyknGZHY4DTkSv1EvqMDFF5OIfHRt-UI305fyUR7nLoxaflu2iRj-dFp4s60moku1pPVso-0W8CLiavZmwV9FIJTNz~1FhYdIvTxN8~rVP6idlH3wQSWaBjRuYAuezrQYVRrWYA5QzIw8OBuSSq~tI5Zu82FXPWef-ST4rHP05CUAtE2cq-ndmnQZtvVCUqJODoAER-GB18QfHfdRgZdgxeaEYzpCHEq74XsT09o63zfBV8X91gq55SN~-F8zgQChNgiF4SkPbs-h0vvxd4y55cJFLJGrKVnR3eZe3yQlUyGTb3HhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
        </div>
      </Layout>
    </main>
  )
}
