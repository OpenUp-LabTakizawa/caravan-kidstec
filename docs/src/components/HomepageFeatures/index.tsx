import Link from "@docusaurus/Link"
import Heading from "@theme/Heading"
import clsx from "clsx"
import type { ReactNode } from "react"
import styles from "./styles.module.css"

type FeatureItem = {
  title: string
  link: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: ReactNode
}

const FeatureList: FeatureItem[] = [
  {
    title: "🏠ホームページ",
    link: "/docs/homepage/services",
    Svg: require("@site/static/img/next.svg").default,
    description: (
      <>
        React のフレームワークである Next.js を採用しています。 更に、Tailwind
        CSS や TypeScript を用いたモダン開発を行っています。
      </>
    ),
  },
  {
    title: "🧰インフラ",
    link: "/docs/infra/services",
    Svg: require("@site/static/img/docker.svg").default,
    description: (
      <>
        Docker コンテナー技術を用いて、AWS 上に構成しています。 また、 GitHub
        Actions の CI/CD で、自動デプロイを行っています。
      </>
    ),
  },
  {
    title: "📝ドキュメント",
    link: "/docs/document/what-is-docusaurus",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        このドキュメントは Docusaurus で作成されています。 Docusaurus は MDX や
        Algolia Search をサポートしています。
      </>
    ),
  },
]

function Feature({ title, link, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={link}>{title}</Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
