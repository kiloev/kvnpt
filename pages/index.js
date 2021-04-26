import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import { getHome } from '../utils/storyblok'
import Image from '../components/image'

export default function Home({ photo, introduction, contacts }) {
  return (
    <>
      <Head>
        <title>Kevin Putrajaya</title>
      </Head>

      <div className="h-screen -my-8 py-8 flex items-center">
        <div className="md:flex md:items-start">
          <Image src={photo.url} width={125} height={125} className="rounded-full md:mt-1 md:flex-shrink-0" />
          <div className="mt-8 md:mt-0 md:ml-8">
            <div className="mb-8">
              <ReactMarkdown children={introduction} />
            </div>
            {
              contacts.map((contact, index) => (
                <a className="mr-4 inline-block" href={contact.link} target="_blank" key={index}>
                  <Image src={contact.image.url} title={contact.title} width={25} height={25} />
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const resHome = await getHome()
  const { photo, introduction, contacts } = resHome.story.content

  return {
    props: {
      photo,
      introduction,
      contacts
    },
  }
}
