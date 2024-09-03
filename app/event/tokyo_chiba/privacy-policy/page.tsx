import { Divider } from "@/app/components/layout/divider"
import Link from "next/link"
import type { JSX } from "react"

export default function PrivacyPolicy(): JSX.Element {
  const addressId: string = "address"
  const contactId: string = "contact"
  const purposeId: string = "purpose"
  const mailAddress: string = "privacy@openupgroup.co.jp"

  return (
    <>
      <p className="px-4 text-xs sm:text-sm">
        こどもテックキャラバンの個人情報は、株式会社オープンアップグループ（以下「当社」）が代表して取得しておりますので、当社の個人情報保護方針を以下にお知らせします。
      </p>
      <section className="bg-base-200 leading-5 m-4 p-4 rounded-2xl space-y-4 text-xs sm:leading-7 sm:text-sm">
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
            <br />
            また、当社は、あらかじめ本人の承諾を得ることなく個人情報保護法に定める要配慮個人情報を取得いたしません。
            <br />
            個人情報を利用する際は、本人に明示、通知、または公表した利用目的の範囲内に限定し、それに反する目的外利用を行わないための措置を講じます。
            <br />
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
            <br />
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
      <section className="bg-base-200 leading-5 m-4 p-4 rounded-2xl space-y-4  text-xs sm:leading-7 sm:text-sm">
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
            <Link href={`#${contactId}`} className="link">
              ５.&nbsp;個人情報に関するお問い合わせ方法及び窓口
            </Link>
            」までお願いします。
          </p>
        </section>
      </section>
      <section className="bg-base-200 leading-5 m-4 p-4 rounded-2xl space-y-4 text-xs sm:leading-7 sm:text-sm">
        <h2 className="font-bold text-2xl text-center">
          個人情報の取り扱いに関して
        </h2>
        <p>
          当社では「個人情報保護方針」に基づき個人情報の適切な保護に取り組んでいます。
          <br />
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
        <section id={addressId} className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">２．</span>
            個人情報の管理者およびその連絡先
          </h3>
          <p>
            当社の個人情報保護管理責任者は、グループ管理部長となります。
            <br />
            ※後述の「
            <Link href={`#${contactId}`} className="link">
              ５.&nbsp;個人情報に関するお問い合わせ方法及び窓口
            </Link>
            」にご連絡ください。
          </p>
        </section>
        <Divider />
        <section id={purposeId} className="space-y-4">
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
            <tbody className="text-xs sm:text-sm">
              <tr className="border-b-2 border-white">
                <th className="px-2 sm:px-4">イベントご参加者様</th>
                <td className="border-l-2 border-white px-2 sm:px-4">
                  <ul className="list-disc pl-4 space-y-2">
                    <li>
                      当社およびイベント共催各社のイベント、サービス等ご案内
                    </li>
                    <li>イベントに関する宣伝、広報</li>
                    <li>
                      イベント参加、サービス利用等に関するデータ分析
                      <br />
                      （個人特定できない統計データの公表・第三者開示を含む）
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th className="px-2 sm:px-4">
                  各種ご相談・
                  <br />
                  お問い合わせ
                </th>
                <td className="border-l-2 border-white px-2 sm:px-4">
                  <ul className="list-disc pl-4 space-y-2">
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
          <p>
            その他、個別に書面で明示したとおりの利用目的とします。
            <br />
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
          <ol className="px-3 space-y-2">
            <li className="before:content-['①'] before:mr-1">
              共同して利用される個人情報の項目：
              <p className="px-4">
                氏名、年齢、性別、続柄、住所、電話番号、メールアドレス、SNSアカウント、肖像を含む動画・画像、イベントに関するコメント・アンケート回答
              </p>
            </li>
            <li className="before:content-['②'] before:mr-1">
              共同して利用する者の範囲：
              <p className="px-4">
                株式会社オープンアップグループおよびその他イベントを共同して開催する会社（以下「共催先」）
                <br />
                該当する共催先の範囲は以下をご参照ください。
              </p>
              <p className="px-6">
                こどもテックキャラバンＨＰ&nbsp;スポンサーおよびパートナー
                <br />
                <Link href="/" className="link">
                  https://caravan-kidstec.com/
                </Link>
              </p>
            </li>
            <li className="before:content-['③'] before:mr-1">
              共同して利用する者の利用目的：
              <p className="px-4">
                「
                <Link href={`#${purposeId}`} className="link">
                  ３.&nbsp;個人情報の利用目的
                </Link>
                」をご参照ください。
              </p>
            </li>
            <li className="before:content-['④'] before:mr-1">
              取得の方法：
              <p className="px-4">
                書面・メール等の電子データ・電話や対面による取得
              </p>
            </li>
            <li className="before:content-['⑤'] before:mr-1">
              共同して利用する個人情報の管理責任者：
              <p className="px-4">
                「
                <Link href={`#${addressId}`} className="link">
                  ２.&nbsp;個人情報の管理者およびその連絡先
                </Link>
                」をご参照ください。
              </p>
            </li>
          </ol>
        </section>
        <Divider />
        <section id={contactId} className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">５．</span>
            個人情報に関するお問い合わせ方法及び窓口
          </h3>
          <address>
            <ul className="px-4">
              <li>
                LINEトーク：
                <p className="pl-4">LINEアカウント「こどもテックキャラバン」</p>
              </li>
              <li>
                郵送：
                <p className="pl-4">
                  東京都港区虎ノ門１－３－１&nbsp;東京虎ノ門グローバルスクエア16F
                  <br />
                  株式会社オープンアップグループ&nbsp;サステナビリティ推進部
                </p>
              </li>
              <li>
                メールアドレス：
                <p className="pl-4">
                  <Link href={`mailto:${mailAddress}`} className="link">
                    {mailAddress}
                  </Link>
                </p>
              </li>
            </ul>
          </address>
        </section>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">６．</span>
            所属する認定個人情報保護団体の名称および苦情の解決の申し出先
          </h3>
          <p>現在、当社の所属する認定個人情報保護団体はありません。</p>
        </section>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">７．</span>
            個人情報の安全管理措置
          </h3>
          <p>当社は個人情報の適正な取扱いのため、以下の措置を実施します。</p>
          <ul className="space-y-4">
            <li>
              （基本方針の策定）
              <ul className="list-disc pl-6">
                <li>
                  個人情報の適正な取扱いを確保するため、個人情報保護方針を策定します。
                </li>
              </ul>
            </li>
            <li>
              （個人情報の取扱いに関する社内規定の整備）
              <ul className="list-disc pl-6">
                <li>
                  個人情報の漏えい等の防止を含む個人情報の安全管理のため、個人情報の取扱いに関する社内規定を整備します。
                </li>
              </ul>
            </li>
            <li>
              （組織的安全管理措置）
              <ol className="pl-1">
                <li className="before:content-['①'] before:mr-1">
                  組織体制：
                  <p className="px-4">
                    情報の取扱い（取得、利用、保存、提供、削除・廃棄等）の段階ごとにおける関係者の役割を規定し、それに従った組織体制を整備します。
                  </p>
                </li>
                <li className="before:content-['②'] before:mr-1">
                  運用の確認：
                  <p className="px-4">
                    整備された社内規定に従って個人情報を取扱うものとし、取扱い記録をシステムログや書面等で作成、社内規定に従った運用となっているかどうかを適宜確認します。
                  </p>
                </li>
                <li className="before:content-['③'] before:mr-1">
                  台帳管理：
                  <p className="px-4">
                    個人情報の取扱い状況を把握・確認する手段として、当社が取得した、或いは当社に委託された個人情報の管理台帳を作成、管理します。
                  </p>
                </li>
                <li className="before:content-['④'] before:mr-1">
                  事故時の対応：
                  <p className="px-4">
                    漏えい等の事故発生時の体制・手順を策定します。
                  </p>
                </li>
                <li className="before:content-['⑤'] before:mr-1">
                  点検・見直し：
                  <p className="px-4">
                    個人情報の取扱い状況について、定期的に自己点検を実施するとともに、情報管理部門、内部監査部門、外部委託専門業者等によるチェックを実施し、安全管理体制の評価、見直し、改善に継続的に取り組みます。
                  </p>
                </li>
              </ol>
            </li>
            <li>
              （人的安全管理措置）
              <ul className="list-disc pl-6">
                <li>
                  個人情報の取扱いに関する注意・留意事項について、当社の従業者に定期的な研修や訓練を実施します。また、個人情報を含む秘密情報についての秘密保持に関する事項を就業規則や関連規定に記載するなど、当社従業者の秘密保持義務を明らかにします。
                </li>
              </ul>
            </li>
            <li>
              （物理的安全管理措置）
              <ol className="pl-1">
                <li className="before:content-['①'] before:mr-1">
                  取扱い区域：
                  <p className="px-4">
                    個人情報を取扱う区域を設定し、当該区域の入退管理ルールを策定します。また、個人情報が記録された（或いは記録が可能な）機器、電子媒体、書類等の持ち込み、持ち出しルールを併せて策定します。
                  </p>
                </li>
                <li className="before:content-['②'] before:mr-1">
                  機器・電子媒体等の盗難防止：
                  <p className="px-4">
                    個人情報が記録された機器、電子媒体、書類等の紛失または盗難等を防止するための適切な措置を実施します。
                  </p>
                </li>
                <li className="before:content-['③'] before:mr-1">
                  機器・電子媒体等の運搬：
                  <p className="px-4">
                    個人情報が記録された機器、電子媒体、書類等を持ち運ぶ場合、容易に個人情報を漏えいさせないよう暗号化、パスワード制御等の措置を実施します。
                  </p>
                </li>
                <li className="before:content-['④'] before:mr-1">
                  機器・電子媒体等の廃棄：
                  <p className="px-4">
                    個人情報が記録された機器、電子媒体、書類等は、個人情報を復元できない方法で廃棄します。
                  </p>
                </li>
              </ol>
            </li>
            <li>
              （技術的安全管理措置）
              <ol className="pl-1">
                <li className="before:content-['①'] before:mr-1">
                  アクセス制御：
                  <p className="px-4">
                    個人情報を取扱う情報システムについては、業務履行上の必要性がある最小限の範囲となるようアクセス制御を実施し、アクセス可能な当社従業者及び、当該従業者が取扱う個人情報データベース等の範囲を限定します。
                  </p>
                </li>
                <li className="before:content-['②'] before:mr-1">
                  識別と認証：
                  <p className="px-4">
                    個人情報を取扱う情報システムは、当該システムを使用する当社従業者が正当なアクセス権限を有する者であることを、識別した結果に基づき認証します。
                  </p>
                </li>
                <li className="before:content-['③'] before:mr-1">
                  不正アクセス等の防止：
                  <p className="px-4">
                    個人情報を取扱う情報システムを、外部からの不正アクセスまたは不正ソフトウェアから保護する仕組みを導入し、適切に運用します。
                  </p>
                </li>
                <li className="before:content-['④'] before:mr-1">
                  漏えい等の防止：
                  <p className="px-4">
                    個人情報を取扱う情報システムにおいて、使用に伴う個人情報の漏えい等を防止するための措置を実施します。
                  </p>
                </li>
              </ol>
            </li>
            <li>
              （委託先の監督）
              <ul className="list-disc pl-6">
                <li>
                  個人情報の取扱いの全部または一部を第三者に委託する場合、委託先において個人情報を安全に管理するための措置が適切に講じられるよう、適切な委託先の選定を行います。また、選定した委託先との間では、委託契約を締結のうえ、定期的に監査を行う等により委託先における当社が委託した個人情報の取扱い状況を把握するなど、適切に委託先の管理および監督を行います。
                </li>
              </ul>
            </li>
            <li>
              （外的環境の把握）
              <ul className="list-disc pl-6">
                <li>
                  個人情報を保管している以下の国における個人情報に関する制度を把握したうえで、安全管理措置を実施します。
                </li>
              </ul>
              <p className="pl-6">
                【保有個人データの保管国】
                <br />
                アメリカ、シンガポール
              </p>
            </li>
          </ul>
        </section>
        <Divider />
        <section className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="text-primary">８．</span>
            開示対象個人情報の「開示等の求め」に応じる手続き等
          </h3>
          <p>
            ご本人がご自身を識別できる開示対象個人情報について、利用目的の通知、開示、内容の訂正、追加または削除、利用の停止、消去および第三者への提供の停止（総称して、「開示等」という）を求めるためのお申し出をされる場合は、上掲の当社「
            <Link href={`#${contactId}`} className="link">
              ５.&nbsp;個人情報に関するお問い合わせ方法及び窓口
            </Link>
            」にご連絡下さい。
          </p>
          <p>
            当社より開示等の求めに際して提出していただく書面（開示等の求めの申入書）の様式を送付いたしますので、当該「申入書」に必要事項を記載し、申込みご本人様であることが確認できる書類などを添付のうえ、お申し込みできます。
          </p>
        </section>
      </section>
      <p className="px-4 text-right text-sm">
        ２０２１年４月１日制定
        <br />
        ２０２４年７月１日改訂
      </p>
      <p className="px-4 text-right text-sm">
        株式会社オープンアップグループ
        <br />
        代表取締役社長&nbsp;佐藤&nbsp;大央
      </p>
    </>
  )
}
