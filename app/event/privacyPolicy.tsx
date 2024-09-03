import { Divider } from "@/app/components/layout/divider"
import { Heading } from "@/app/components/layout/heading"
import type { Submenu } from "@/app/interfaces/menu"
import { EVENT, PRIVACY_POLICY } from "@/app/lib/constant"
import Link from "next/link"
import type { JSX } from "react"

export function PrivacyPolicy({
  submenu,
}: Readonly<{ submenu: Submenu }>): JSX.Element {
  const contactHref: string = "contact"

  return (
    <>
      <Heading menu={EVENT} submenus={[submenu, PRIVACY_POLICY]} />
      <p className="px-4 text-sm">
        こどもテックキャラバンの個人情報は、株式会社オープンアップグループ（以下「当社」）が代表して取得しておりますので、当社の個人情報保護方針を以下にお知らせします。
      </p>
      <section className="bg-base-200 leading-7 m-4 p-4 rounded-2xl space-y-4 text-sm">
        <h2 className="font-bold text-2xl text-center">個人情報保護方針</h2>
        <p>
          当社は、個人情報を大切に取り扱い、個人の権利利益を保護することを重要な社会的責務と考えています。
          各種法令を遵守し、個人情報保護の実践に努めます。
        </p>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">１．</span>
            個人情報の取得･利用･提供等について
          </h3>
          <p>
            個人情報を取得する際は、その利用目的をできる限り具体的に特定し、その目的達成に必要な限度において適法かつ公正な手段で取得します。
            また、当社は、あらかじめ本人の承諾を得ることなく個人情報保護法に定める要配慮個人情報を取得いたしません。
            個人情報を利用する際は、本人に明示、通知、または公表した利用目的の範囲内に限定し、それに反する目的外利用を行わないための措置を講じます。
            個人情報を第三者に提供またはその取り扱いを委託する際は、本人が同意を与えた利用目的の範囲内で、適法にこれを行います。
          </p>
        </section>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">２．</span>
            安全対策の実施について
          </h3>
          <p>
            個人情報の正確性およびその利用の安全性を確保するため、情報セキュリティ対策を始めとする安全措置を構築し、個人情報への不正アクセス、個人情報の漏洩、滅失または毀損等の的確な防止とセキュリティの是正に努めます。
            また、個人情報保護に関する社内規定を定め、役職員への研修の実施、事務所への入退室管理、委託先の監督等の安全管理の取り組みを行っています。
          </p>
        </section>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">３．</span>
            苦情に対する適正な対応について
          </h3>
          <p>
            個人情報を提供された本人の権利を尊重し、本人から自己情報の開示、訂正、削除、または利用もしくは提供の停止等を求められたときは、適法にこれに応じるとともに本人からの苦情に関して適正な対応をします。
          </p>
        </section>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">４．</span>
            法令・指針・規範の遵守について
          </h3>
          <p>
            適正な個人情報保護の実現のため、個人情報の取り扱いに関する法令､国が定める指針およびその他の規範を遵守します。
          </p>
        </section>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">５．</span>
            個人情報保護マネジメントシステムの継続的改善について
          </h3>
          <p>
            個人情報保護マネジメントシステムの運用状況について定期的に監査し、それを維持し、継続的に改善し、個人情報の保護水準の向上を図ります。
          </p>
        </section>
      </section>
      <section className="bg-base-200 leading-7 m-4 p-4 rounded-2xl space-y-4 text-sm">
        <h2 className="font-bold text-2xl text-center">
          特定個人情報の適正な取扱いに関する基本方針
        </h2>
        <p>
          当社は、個人番号及び特定個人情報（以下「特定個人情報等」）の適正な取扱いの確保について、組織として取組むため、本基本方針を定めます。
        </p>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">１．</span>
            関連法令・ガイドライン等の遵守について
          </h3>
          <p>
            当社は、「行政手続きにおける特定の個人を識別するための番号の利用等に関する法律」（通称「マイナンバー法」）及び「個人情報の保護に関する法律」（通称「個人情報保護法」）並びにこれらの政令、省令、及びガイドラインを遵守して、特定個人情報等の適正な取扱いを行います。
          </p>
        </section>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">２．</span>
            安全管理措置について
          </h3>
          <p>
            当社は、特定個人情報等の適切な管理のために、別途、特定個人情報等の取扱いに関する社内規定を定め、これを遵守します。
          </p>
        </section>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">３．</span>
            ご質問・苦情処理の窓口について
          </h3>
          <p>
            特定個人情報等の取扱いに関するご質問や苦情につきましては、後述の「個人情報の取り扱いに関して」の「
            <Link href={`#${contactHref}`} className="link">
              5.&nbsp;個人情報に関するお問い合わせ方法及び窓口
            </Link>
            」までお願いします。
          </p>
        </section>
      </section>
      <section className="bg-base-200 leading-7 m-4 p-4 rounded-2xl space-y-4 text-sm">
        <h2 className="font-bold text-2xl text-center">
          個人情報の取り扱いに関して
        </h2>
        <p>
          当社では「個人情報保護方針」に基づき個人情報の適切な保護に取り組んでいます。
          当社がイベント開催、運営の用に供するために取得し、または保有する個人情報について、以下の通りお知らせいたします。
        </p>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">１．</span>
            個人情報の当事業者の名称
          </h3>
          <p>
            株式会社オープンアップグループ
            <br />
            〒105-0021 東京都港区虎ノ門一丁目3番１号
          </p>
        </section>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">２．</span>
            個人情報の管理者およびその連絡先
          </h3>
          <p>
            当社の個人情報保護管理責任者は、グループ管理部長となります。
            ※後述の「個人情報に関するお問い合わせ窓口」にご連絡ください。
          </p>
          {/* <section className="space-y-4">
            <h4>
              １）当社は、以下に挙げるケースにおいて、いただいた個人情報を外部に提供します。
            </h4>
            <ul className="px-4">
              <li>①&nbsp;本件実施に関する業務提携を行う場合</li>
              <li>②&nbsp;本件実施に関する業務委託を行う場合</li>
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
          </section> */}
        </section>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">３．</span>
            個人情報の利用目的
          </h3>
          <table className="border-2 border-white table">
            <thead>
              <tr className="border-b-2 border-white">
                <th>種別</th>
                <th className="border-l-2 border-white">利用目的</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-white">
                <th>イベントご参加者様</th>
                <td className="border-l-2 border-white">
                  <ul className="list-disc pl-2 space-y-2">
                    <li>
                      当社およびイベント共催各社のイベント、サービス等ご案内
                    </li>
                    <li>イベントに関する宣伝、広報</li>
                    <li>
                      ご相談・お問い合わせに関するデータ分析
                      <br />
                      （個人特定できない統計データの公表・第三者開示を含む）
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>
                  各種ご相談・
                  <br />
                  お問い合わせ
                </th>
                <td className="border-l-2 border-white">
                  <ul className="list-disc pl-2 space-y-2">
                    <li>ご相談・お問い合わせ対応及び関連するご連絡</li>
                    <li>
                      ご相談・お問い合わせに関するデータ分析
                      <br />
                      （個人特定できない統計データの公表・第三者開示を含む）
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <p>その他、個別に書面で明示したとおりの利用目的とします。</p>
          <p>
            ※なお、取得した個人情報は、取得時に明示した場合を除き、お客様の同意を得ずに第三者に提供することはありません。
            ただし、利用目的の範囲において個人情報の全部または一部を委託する場合があります。
          </p>
        </section>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">４．</span>
            個人情報の共同利用について
          </h3>
          <p>
            当社及びオープンアップグループ各社の総合的なサービスのご提供のために、以下のとおり個人情報を共同で利用いたします。
          </p>
          <ol className="px-3">
            <li className="before:content-['①'] before:mr-1">
              共同して利用される個人情報の項目：&nbsp;氏名、年齢、性別、続柄、住所、電話番号、メールアドレス、SNSアカウント、肖像を含む動画・画像、イベントに関するコメント・アンケート回答
            </li>
            <li className="before:content-['①'] before:mr-1">
              共同して利用する者の範囲：&nbsp;株式会社オープンアップグループおよびその他イベントを共同して開催する会社（以下「共催先」）
              該当する共催先の範囲は以下をご参照ください。
              <p className="px-2">
                こどもテックキャラバンＨＰ&nbsp;スポンサーおよびパートナー
                <br />
                <Link href="/" className="link">
                  https://caravan-kidstec.com/
                </Link>
              </p>
            </li>
          </ol>
        </section>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">５．</span>
            個人情報保護マネジメントシステムの継続的改善について
          </h3>
          <p>
            個人情報保護マネジメントシステムの運用状況について定期的に監査し、それを維持し、継続的に改善し、個人情報の保護水準の向上を図ります。
          </p>
        </section>
      </section>
      <section>
        <section className="space-y-4">
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
        <section className="space-y-4">
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
