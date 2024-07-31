import { Divider } from "@/app/components/layout/divider"
import { Heading } from "@/app/components/layout/heading"
import type { Submenu } from "@/app/interfaces/menu"
import { EVENT, PRIVACY_POLICY } from "@/app/lib/constant"
import Link from "next/link"
import type { JSX } from "react"

export function PrivacyPolicy({
  submenu,
  organizations,
}: Readonly<{ submenu: Submenu; organizations: string[] }>): JSX.Element {
  return (
    <>
      <Heading menu={EVENT} submenus={[submenu, PRIVACY_POLICY]} />
      <section className="bg-base-200 grid gap-4 leading-7 m-4 p-4 rounded-box text-sm">
        <h2 className="font-bold text-2xl text-center">個人情報保護方針</h2>
        <p>
          株式会社オープンアップグループ（以下「当社」といいます。）は、イベント&nbsp;【こどもテックキャラバン】&nbsp;（以下「本件」といいます。）へのご参加お申込みに必要な情報、また参加決定者の詳細情報においてお預かりする個人情報の取扱いについて、次のように管理し、保護に努めて参ります。
        </p>
        <Divider />
        <section className="grid gap-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">１．</span>
            個人情報の収集、及び、利用目的
          </h3>
          <p>
            当社は、お申込者様から収集した個人情報は以下に示す本件活動の目的で利用することとし、それ以外の目的に利用することは一切ありません。
          </p>
          <ul className="grid gap-2 list-disc px-8">
            <li>
              お申込者様を識別する為、氏名・年齢・学年・続柄などの情報を利用いたします。
            </li>
            <li>
              本件に関するお問い合わせへの返答や、本件に関するご案内を行う為に、電話番号、メールアドレス、住所等の連絡手段の情報を利用します。
            </li>
            <li>
              本件ご参加の場合、本件取組の周知のための広報資料（インタビュー記事等）に、氏名等の基本情報や写真を使用させていただく場合がございます。
            </li>
            <li>
              次回以降の同様のイベント開催のお知らせをする為に、電話番号、メールアドレス、住所等の連絡手段を利用させていただく場合がございます。
            </li>
          </ul>
        </section>
        <Divider />
        <section className="grid gap-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">２．</span>
            収集したお申込者様の個人情報の第三者への提供、及び、外部への預託について
          </h3>
          <section className="grid gap-4">
            <h4>
              １）当社は、以下に挙げるケースにおいて、いただいた個人情報を外部に提供します。
            </h4>
            <ul className="px-4">
              <li>①本件実施に関する業務提携を行う場合</li>
              <li>②本件実施に関する業務委託を行う場合</li>
            </ul>
            <p>a.&nbsp;提供する個人情報の項目</p>
            <ul className="list-disc px-8">
              <li>氏名</li>
              <li>住所</li>
              <li>年齢</li>
              <li>性別</li>
              <li>電話番号</li>
              <li>メールアドレス</li>
              <li>写真</li>
              <li>家族構成</li>
              <li>運営に必要な備考情報</li>
            </ul>
            <p>b.&nbsp;提供の手段・方法</p>
            <p className="px-4">
              書面にて直接またはデータ転送（Eメール、FAXを含む）
            </p>
            <p>c.&nbsp;当該情報の提供を受ける者（組織）</p>
            <ul className="list-disc px-8">
              {organizations.map((organization) => (
                <li key={organization}>{organization}</li>
              ))}
            </ul>
            <p>d.&nbsp;個人情報の取扱いに関する契約</p>
            <p className="px-4">
              提供する個人情報の取扱いに関しては、機密保持及び管理責任の所在を明らかにする契約を上記組織と締結しております。
            </p>
          </section>
          <section className="grid gap-4">
            <h4>
              ２）法令に基づき、お申込者様からご提供頂いた個人情報を関係機関へ提供、預託する場合があります。
            </h4>
            <p>
              上記１）、２）以外、お申込者様からの同意がない限り、第三者へ提供、外部へ預託することはいたしません。
            </p>
          </section>
        </section>
        <Divider />
        <section className="grid gap-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">３．</span>
            要配慮個人情報の取得について
          </h3>
          <p>本件について、要配慮個人情報をいただくことはございません。</p>
        </section>
        <Divider />
        <section className="grid gap-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">４．</span>
            個人情報の管理方法
          </h3>
          <p>
            お預かりしました個人情報は当社にて厳重に管理致します。
            <br />
            <br />
            なお、お申込者様からご提出いただきました必要書類は返却いたしませんので、あらかじめご了承願います。
            <br />
            <br />
            また、お預かりしました個人情報は、法令及び本件運営管理の範囲内において管理・保管し、当社内規に基づく保存期間経過後は一切の個人情報を廃棄処理致します。
          </p>
        </section>
        <Divider />
        <section className="grid gap-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">５．</span>
            個人情報の提出に関して
          </h3>
          <p>
            当社への個人情報の提出はあくまで任意のものですが、情報を提出いただかず運営に差し支えが生じる場合など、当社の判断で本件への参加をお断りする場合があります。
          </p>
        </section>
        <Divider />
        <section className="grid gap-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">６．</span>
            個人情報に関する権利について
          </h3>
          <p>
            当社が保有するお申込者様の個人情報については、開示等（利用目的の通知、開示、内容の訂正、追加又は削除、利用の停止、消去及び第三者への提供停止）を請求することができます。
            <br />
            <br />
            お申込者様ご自身の個人情報の開示等を請求される場合は、当社指定の申請書を請求のうえ当社までご提出いただく必要があります。
            <br />
            <br />
            申請書の入手に関しては下記連絡先にご連絡をお願い致します。なお、本手続きにあたり、お申込者様が本人であることを確認させて頂きます。
          </p>
          <address className="mx-auto px-4">
            宛先：
            <p className="pl-4">
              株式会社オープンアップグループ
              <br />
              個人情報相談窓口担当
            </p>
            メールアドレス：
            <p className="pl-4">
              <Link href="mailto:privacy@openupgroup.co.jp" className="link">
                privacy@openupgroup.co.jp
              </Link>
            </p>
            個人情報管理責任者：
            <p className="pl-4">
              株式会社オープンアップグループ
              <br />
              グループ管理部長
            </p>
          </address>
        </section>
        <Divider />
        <section className="grid gap-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">７．</span>
            個人情報取り扱いについての同意の確認
          </h3>
          <p>
            本サイトにおいて、お申込者様から同意の意思を経てお申し込み頂いた事で、上記１～6について同意を得たものと致します。
          </p>
        </section>
      </section>
    </>
  )
}
