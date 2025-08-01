"use client"

import { ChevronRightIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { type JSX, type RefObject, useEffect, useRef, useState } from "react"
import { OpacityZero } from "@/app/components/animation/opacityZero"
import type { Indicator } from "@/app/interfaces/indicator"
import type { Picture } from "@/app/interfaces/picture"
import type { Review } from "@/app/interfaces/review"
import { cloudfrontLoader } from "@/app/lib/loader"

export function IndicatorCarousel(): JSX.Element {
  const programmingPictures: Picture[] = [
    {
      alt: "はじめてのはんだづけにどきどき",
      src: "/image/hiroshima/202407/hiroshima_university/soldering.avif",
      blurDataUrl:
        "data:image/webp;base64,UklGRqYCAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgguAAAANAFAJ0BKkkASQA+7WaoTz+1JCMuF0yT8B2JZwLkAjgIrg+IT4onLBVthC+RqAtshbVUFByxBpwA4qLq7TH2GETq/dJ+p8gvkhO189eCHD0fbCPK3fFVfiBHLjcO5nl75AhfnIf0HkvjvctNC1caOwi3FcEjuoW33KKxV/0LU28WHx/nrGPM0qSB6QJlaviH4qLTdavKcn00mGj482wP3+1ccpKo6JwHEEapkXk0n+t8IvBdcAAAAAA=",
    },
    {
      alt: "お父さんとはんだ確認中…",
      src: "/image/kanto/202410/kurkku_fields/pointing_ichigodake.avif",
      blurDataUrl:
        "data:image/webp;base64,UklGRqwCAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggvgAAAPAGAJ0BKkkASQA+7WaoT7OqsSovVVsScB2JZQDMWAfg+yCU/wVkFvaT4IPfdja66PLPI8X9FZnZ9v0oHefg7AAA/vK0Fku1Cj0h1c6bF88X2Ta40zXlHqhnoi8NQoUwbPiQuV/WR4Bxp5lfvJhaTDUawiMxDrsM/alBlOsKUNKeCJRYF7M0oqW+MwvmMAUjIrSo0PsFLvUoQlF2lPc0SIrfQef3us525SGoLrUVM3Ovm7+aIC0SGAmdTQc/IAA=",
    },
    {
      alt: "ロボット作りに挑戦！",
      src: "/image/kanto/202410/kurkku_fields/assemble_insect.avif",
      blurDataUrl:
        "data:image/webp;base64,UklGRrgCAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggygAAAFAJAJ0BKkkASQA+3WShTb+5riI0ePxz8BuJZQDJgFZHqE+riNNm0EK3a6TJfnP/uNOeGwK4UYP2cNCrOHPbL/WlthNe/uLHZxpISe34Pp34Zi4AAP7ubcT00Ch2nxiHnEfuw8gQKOcnfj4LQVOrGhDyilsDD2vgwhxW16rlW3NEBMmVRoW2zoaU7maKEOe9nEOXvO9DkhmE0EQp9XY2a07x5D+f0/ZySCGLIeyIe3WvMbA8whJjKxg1m/0gCGXfT46mxwKz2dQAAAA=",
    },
    {
      alt: "最終日のロボサバ大会！優勝目指そう！",
      src: "/image/hiroshima/202407/tgn/watch_robot_move.avif",
      blurDataUrl:
        "data:image/webp;base64,UklGRnACAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggggAAAFAFAJ0BKkkASQA+7XSwUronKiKii9NAHYlnBnANBIByHg2R9Hvi6XjEBhaHgr8lgkKMAAD+21EQrRryrEPJfp/wIEfuTwE0HJ2VprNWX08iKrro2eDI0ye1Pf1uWD9wE/gAPMRw7KvUIAeUducfQ+g4MZczwbwWxQBgBKguwuHAAAA=",
    },
    {
      alt: "ロボットを置く位置から勝負は始まっています",
      src: "/image/kanto/202410/tgn/putting_robot.avif",
      blurDataUrl:
        "data:image/webp;base64,UklGRtICAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg5AAAAFAJAJ0BKkkASQA+6WSoTb+/pC8zNmpr8B0JZQDNfKJGvT3nJgobk9BI3cdjoFU+aWTVYSwZCO97mFKqqsBQM6ZpIoVnduSoaqOmiMelWh7k/8uEAP7ow7KCJNOeZ29nPhljjKarl2jhSM2YIQehsBvmL3l3Rqb+1ziOSxNJOWPSpqnSARzvWFyXARgpjviNQq+ikNV3LWIS8YHnigwe0fq1awtdG9Rz7w/qe7cn2eSpMMDXVG/kwL+aA4algKxkALlQhUezX0AA+xUW2u2UWHoSAsuU0Quy3mrO4/6Qdf1uZFgAAA==",
    },
    {
      alt: "ロボットのプログラミングが成功してハイタッチ！",
      src: "/image/kanto/202410/tgn/high_touch.avif",
      blurDataUrl:
        "data:image/webp;base64,UklGRtACAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg4gAAALAHAJ0BKkkASQA+6WqrTb+wra8vWAuz8B0JZQDLLBYPD3LjUeA3MxPmmwEMM0JaN8wS3d/3SryiSitPkEyXEyQE+XM0agAA/u0/PJaRB6I4DmbaoHD24VIO3/IUr4VP/keABGAzP2En6saifCnhV5cD8CvFqjT5Mx3EmHY2hTQ6Q+F04RE4/IREysnAh6Qi8dTLC4PvXSAeHWCXrKs4dF4PjCxZyEB0i/okrI3EaOPpv499AlZ/BDAWbYL03xvAHkuwDUilJpVWO/yCOqmwY0OwYz4882CQAK/gXwbFFgmyAAA=",
    },
  ] as const
  const eventPictures: Picture[] = [
    {
      alt: "採れたてのお魚に興味津々！",
      src: "/image/hiroshima/202407/eda_island/holding_fish.avif",
      blurDataUrl:
        "data:image/webp;base64,UklGRqQCAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggtgAAAPAFAJ0BKkkASQA+3VijTb0yryM1ulz7oBuJZQZwDEVCehHaAws/++4uWAWCkFg1N20m+9ajoSQAAP7iG8sDLwuUNW/MCgPAc9CQJ93TQ2OaEa0Win7l4llwqFBm85i4KAa30a2Cc9PLLGJKuyTWFDGY7T+uc4REUOaXyNVWPXqO72kuSCMhC56eXWVwohrKk+Ch7TCfWpKlScXGwhtU439Y239gVFFd9feb3LaI6CAmYnXtgAAA",
    },
    {
      alt: "広島大学のチェックポイント確認中…",
      src: "/image/hiroshima/202407/hiroshima_university/checking_course.avif",
      blurDataUrl:
        "data:image/webp;base64,UklGRp4CAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggsAAAANAGAJ0BKkkASQA+7WysUb+/raeqVArT8B2JZQZwDQjK5wSHd2hE8M9Vl9fhpGHk0DefUE+/3KkdsDqsogu/MAD+6A0AgJX6+8oa9/dAyRfK6FlDAaoQ0Hdoe9TQVGGJByPhkU++ba7dcwsWfincieNQdKOSxvQ0PvuZwl2yoBA4WvhZsd+aciw4+OSCbV3S3Sx/KN9uVAX5EzjX5dFe8Ut/u/Dw65eTn79SPY8g0zAA",
    },
    {
      alt: "クルックフィールズで芋掘り体験！",
      src: "/image/kanto/202410/kurkku_fields/digging_potato.avif",
      blurDataUrl:
        "data:image/webp;base64,UklGRsoCAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg3AAAAJAIAJ0BKkkASQA+4V6lTbg4p6IzOZzLEBwJZQDF/LXL0ACbhgzjrNCatr7MjpFUPPDFCkoZVmH8JfvkNbSNdsMRuQRpfhDVMw4sI3LwAPnclC8s1D4X5N6DLJbm1oNH618KbioXI1GAhivq3YdpVAvWVnLrbiHDYAtvUDs1hO+H667pKblGxfs8WUca0vfoSdoW6SWTKppelHemTkkObNmDwteHcLZZkIL9jmjREQgyxDvOvzPun3nMtSYl042/QT2sAoNYaCNdh4zV4k4abCkX6ZIMz6Xi3ooqJAA=",
    },
    {
      alt: "力を合わせて、レイのブログに挑戦だ！",
      src: "/image/kanto/202410/openup/watch_phone.avif",
      blurDataUrl:
        "data:image/webp;base64,UklGRtYCAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg6AAAABAJAJ0BKkkASQA+7WqsTzo/tyms1mqr8B2JZQDE0HWj8AfZEpT0mxwAjaI8SQVlmaDCiQZrrp7jSQGGs4ieYcCHNqdKJSzD27NNT/9Jm/WkAAD+2w23lhNOouUKHWEZ3wwELk4kK+2J3r2wS07+f7e+UrhgY8YIkA10rhavDqTjK4plOSQBAEtmJUigLPMi2pdKHZoSTMtzS2TrbTEeguIoQpd93rPwPxupokw8afvij+jkX/0p3Js2kqb3ecG6YOrKXPdaAD6sn8pUTQeT2ildLc47jMJA0bbLZpx0rcm6cqtmSYsAAAA=",
    },
    {
      alt: "ブーケを持って入場！",
      src: "/image/hiroshima/202311/tgn/wedding_bouquet.avif",
      blurDataUrl:
        "data:image/webp;base64,UklGRoQCAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgglgAAAFAFAJ0BKkkASQA+7XawU6m6Kigj9VqLQB2JZwDKPAPXs7U8vS3kFvN2eGsKQXFf49Y1AAD+6LL3yzOCJk7ZP76IZQkUcTKxrXnKwtbe70nSMFefnGiK/3eWyoK2qMG8+DlrQ4tD84CsbXOaCqRJFfW4/G9hVzVNVxWSvdVjeiKcvizDLMZ7G72KLGzoK7pnmsHxuJRgAA==",
    },
    {
      alt: "ケーキ作りも自分で挑戦！",
      src: "/image/hiroshima/202407/tgn/pastry_chef_boy.avif",
      blurDataUrl:
        "data:image/webp;base64,UklGRmgCAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggegAAAPAEAJ0BKkkASQA+7XawVSmnJCMhSgEwHYlnANH4A3xFmZx6Ays+pz3EdNQfHjBdeAD+6rMrEYaNbZO2D0FgI8m3ylOmSbLVt3G+qTr9yebIXC1R5rQnLFePwWxH/M9HywPbXkeyXcxZl7Sn8vwXNH65rb9ggc3wAAAA",
    },
  ] as const
  const pictures: Picture[] = [...programmingPictures, ...eventPictures]
  const indicators: Indicator[] = [
    { title: "プログラミング体験", alt: programmingPictures[0].alt },
    { title: "体験学習", alt: eventPictures[0].alt },
  ] as const
  const carouselRef: RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null)
  const imagesRef: RefObject<Map<string, HTMLImageElement>> = useRef<
    Map<string, HTMLImageElement>
  >(new Map<string, HTMLImageElement>())
  const [activeTab, setActiveTab] = useState<string>(programmingPictures[0].alt)
  const [isBusy, setIsBusy] = useState<boolean>(false)
  let timeoutId: globalThis.Timer

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images: Map<string, HTMLImageElement> = imagesRef.current as Map<
      string,
      HTMLImageElement
    >
    for (const node of [...images.values()].reverse()) {
      const newImage = node.cloneNode(true)
      carousel.prepend(newImage)
    }
  }, [])

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images: Map<string, HTMLImageElement> = imagesRef.current
    const imageNode: HTMLImageElement = images.get(
      pictures[0].alt,
    ) as HTMLImageElement
    const interval = setInterval(() => {
      if (!isBusy) {
        carousel.scrollLeft += imageNode.clientWidth
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  function onClick(indicator: Indicator): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images: Map<string, HTMLImageElement> = imagesRef.current
    const imageNode: HTMLImageElement = images.get(
      pictures[0].alt,
    ) as HTMLImageElement
    const imageWidth: number = imageNode.clientWidth

    if (indicator.alt === activeTab) {
      return
    }

    if (indicator.alt === programmingPictures[0].alt) {
      carousel.scrollLeft = imageWidth * pictures.length
    } else if (indicator.alt === eventPictures[0].alt) {
      carousel.scrollLeft =
        imageWidth * (pictures.length + programmingPictures.length)
    }
  }

  function ScrollEvent(): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images: Map<string, HTMLImageElement> = imagesRef.current
    const imageNode: HTMLImageElement = images.get(
      pictures[0].alt,
    ) as HTMLImageElement
    // imageWidth is floating point so that it should be minus 1
    const imageWidth: number = imageNode.clientWidth - 1
    const maxScrollLeft: number = carousel.scrollWidth - carousel.clientWidth
    const scrollLeft: number = carousel.scrollLeft
    const buffer: number = imageWidth * 2

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      if (
        scrollLeft % (imageWidth * pictures.length) <
        imageWidth * programmingPictures.length
      ) {
        setActiveTab(programmingPictures[0].alt)
      } else if (
        imageWidth * programmingPictures.length <=
        scrollLeft % (imageWidth * pictures.length)
      ) {
        setActiveTab(eventPictures[0].alt)
      }

      if (maxScrollLeft < scrollLeft + buffer) {
        for (const node of images.values()) {
          const newImage = node.cloneNode(true)
          carousel.append(newImage)
          // TODO: Safari works correctly with remove()
          // carousel.firstChild?.remove()
        }
      }
      // TODO: Safari works correctly with remove()
      // if (scrollLeft < buffer) {
      //   for (const node of [...images.values()].reverse()) {
      //     const newImage = node.cloneNode(true)
      //     carousel.prepend(newImage)
      //     carousel.lastChild?.remove()
      //   }
      // }
    }, 100)
  }

  return (
    <>
      <div className="gap-1 grid grid-cols-2 px-1 text-sm sm:text-base">
        {indicators.map((indicator) => (
          <button
            key={indicator.title}
            type="button"
            onClick={() => onClick(indicator)}
            className={`border-b-4 cursor-pointer duration-300 font-bold py-1 rounded-lg shadow-xl ${indicator.alt === activeTab ? "bg-teal-400 border-teal-700 hover:border-b-2 hover:translate-y-0.5" : "bg-gray-100 border-gray-400 hover:border-b-2 hover:translate-y-0.5"}`}
          >
            {indicator.title}
          </button>
        ))}
      </div>
      <div
        ref={carouselRef}
        role="img"
        className="aspect-square flex overflow-x-scroll rounded-2xl scroll-smooth shadow-lg snap-mandatory snap-x w-full"
        onMouseEnter={() => setIsBusy(true)}
        onMouseLeave={() => setIsBusy(false)}
        onTouchStart={() => setIsBusy(true)}
        onTouchEnd={() => setIsBusy(false)}
        onScroll={() => ScrollEvent()}
        style={{ scrollbarWidth: "none" }}
      >
        {pictures.map((picture) => (
          <Image
            key={picture.alt}
            ref={(node: HTMLImageElement) => {
              imagesRef.current.set(picture.alt, node)
              return () => {
                imagesRef.current.delete(picture.alt)
              }
            }}
            loader={cloudfrontLoader}
            src={picture.src}
            width={640}
            height={640}
            alt={picture.alt}
            placeholder="blur"
            blurDataURL={picture.blurDataUrl}
            className="flex-none snap-start w-full"
          />
        ))}
      </div>
      <Attention />
    </>
  )
}

export function Attention(): JSX.Element {
  return (
    <p className="text-center sm:text-sm">
      ※&nbsp;写真は過去開催時のものです。
      <br className="sm:hidden" />
      体験学習はイベントごとに異なります。
    </p>
  )
}

export function ReviewCarousel(): JSX.Element {
  const reviews: Review[] = [
    {
      description:
        "子供はこの3日間でお友達もでき、\nとても楽しかったようで\n「こどもテックキャラバン今度は\nいつあるの？また行けるの？」と\n言っています。\nまたLEDライトもとても気に入り、\n「作ってくれてありがとう！」を\n連発しています。\n親の私達も謎解きを\n他の親御さんと一緒に\n本気で挑んだりと、\n予想以上に楽しいひと時でした。",
      areaAndUser: "第1回 関東 小2",
    },
    {
      description:
        "このような親子で学べる体験\nイベントの開催をしていただき\nありがとうございました。\n自分のやりたいことを\nみつけるヒントや体験、\n学びを通して様々な\n気づきがありました。\n学校や習い事では\n経験できない事がたくさんあり\n社会全体で日本の将来を\n考える取り組みをされていて\n凄いなと思います。",
      areaAndUser: "第1回 関東 小2、小3",
    },
    {
      description:
        "非常に充実したイベントでした。\n特にプログラミングでは、\n親の力を借りず、子供自身で\nスタッフの方の助言をもらい\n試行錯誤し、最終的に、\n目的を達成し、貴重な成功体験を\n経験させていただき、\n子供たちは今回のことで\n大変自信が付き、\nたくさんの学びがありました。\nありがとうございました。",
      areaAndUser: "第1回 関東 小2、小5",
    },
    {
      description:
        "3日間だけではなく、\nもっと長くやりたい。\n\nロボサバ大会をもっとやりたい。\n大人の大会もやってほしい。\nアドバイスや、\n応援する側にもなってみたい。\n\nプログラミングだけでなく、\n様々な体験もできて、\nとても楽しかった。\n絶対また参加したい。",
      areaAndUser: "第1回 関東 小2、小5",
    },
    {
      description:
        "3日間とも内容が非常に濃く、\n親子とも楽しみながら\n学ぶことができました。\n最終日の大会やチャペル入場では\n涙ぐんでしまい、まさかこんな\n感動があるとは参加を決めた\n時には思いもよりませんでした。\n本当に無料で良かったの\nでしょうか…。\n一緒に参加させてもらった5歳の\n弟も、次はロボットつくりたい！\nと意気込んでおります。",
      areaAndUser: "第1回 関東 小3",
    },
    {
      description:
        "親子共に楽しめるイベントを\n行っていただき\nありがとうございます。\n3日間を通じてほかのお友達や\nスタッフの方とも親近感を持って\n楽しく過ごせました。\n\nまた機会があれば、\n今回は年齡制限で\n参加できなかった\n兄弟も含めて参加させて\nもらいたいと思います。",
      areaAndUser: "第1回 関東 小5",
    },
    {
      description:
        "ロボットを使った\nプログラミングは、\n子供の興味を惹いて\nとても楽しそうでした。\n\nプログラミングだけでなく\nロボット作成やハンダ付けも\n楽しかったみたいです。\n\n自分一人で作成する\n達成感が味わえる講習が\n良かったのだと思いました。",
      areaAndUser: "第1回 広島 小4",
    },
    {
      description:
        "プログラミング教育が\n小学校で必修となりましたが、\n学校の授業では体験できない\nプログラミングを楽しく学び、\n海・山での自然も同時に\n体験できたことは、\n子供の良い思い出、\n貴重な体験となりました。\nこの夏で子供が少し\n成長できたところを\n身近で見ることができたのは\n親にとっても貴重な体験でした。",
      areaAndUser: "第1回 広島 小5",
    },
    {
      description:
        "プログラミングも\nアクティビティも\n本格的で期待以上でした。\n\nとても良かったので\n他の子にも\n体験させてあげたい。\n\n広島育ちですが、\n江田島、三段峡どちらも\nいったことがなかったので、\n行けて良かったです。",
      areaAndUser: "第2回 広島 小5",
    },
    {
      description:
        "上の子はより\n色々な経験を通して\n自信をもって\n社会と関わりを\n持っていけると感じた。\n\n下の子も新たに興味を\n持てたことがあったり、\n色々な経験が\nできてよかった。",
      areaAndUser: "第2回 広島 小5、小6",
    },
    {
      description:
        "子どもも親も\n色々な経験、\n体験をすることが出来て、\n楽しかったです！！\n\n多くの子供たちに\nこういった体験が\nできることを\n願っています。",
      areaAndUser: "第2回 広島 小6",
    },
    {
      description:
        "ロボサバスタッフや\n広島大学の学生などと\n色々なお話ができて\n子供たちも良い刺激に\nなったようです。\n\n子供たちの興味が\n広がって良い体験が\nできたと思います。",
      areaAndUser: "第2回 広島 小5、中1",
    },
    {
      description:
        "とても有意義な\n体験でした。\n子供だけでなく、\n親も満足できるという、\n他のイベントでは\n経験したことのない\nイベントでした。\n\n次回も是非是非\n参加させて\n頂きたいです。",
      areaAndUser: "第3回 広島 小4",
    },
    {
      description:
        "縁あって\n参加させていただき、\n沢山の経験を\n得ることが出来ました。\n\n学校でははみ出し気味の\n子供が、楽しそうに\n取り組んでいて、\n親としては\n嬉しく見守りました。\n\nありがとうございました。",
      areaAndUser: "第3回 広島 小5",
    },
    {
      description:
        "至れり尽くせりで\n大変驚きました。\n子供だけでなく、\n親も色々と\n学ばせてもらえて\nありがたかったです。\nスタッフの方々が、\n生き生きされて\nいたのが印象的で、\n今回のイベントに\n子どもを参加させて\nよかったです。",
      areaAndUser: "第3回 広島 小4、小6",
    },
    {
      description:
        "子供たち二人共、\nとても充実した\n3日間を過ごせました。\n\nまた次回も\nチャレンジしたいと\n思います！",
      areaAndUser: "第3回 広島 小4、中2",
    },
    {
      description:
        "最初から最後まで子供自身が\n「やれた!できた!」の気持ちを\n少しでも感じられるように\n応援&フォローをしてくださり、\n本当にありがとうございました。\n特にハンダ付け、プロの技術の\nおかげでふさがってしまった穴を\nあけて下さり「自分のもの」で\n挑戦することができたことに\nとても感謝しています。\nお料理もすごくおいしかったです。\n幸せになりました！",
      areaAndUser: "第4回 広島 小2、小5",
    },
    {
      description:
        "とても素晴らしい体験を\nありがとうございました。\n\nまた次回も\n参加したいと思います。\n\n皆様お疲れ様でした。",
      areaAndUser: "第4回 広島 小5、中2",
    },
  ] as const
  const carouselRef: RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null)
  const reviewsRef: RefObject<Map<string, HTMLDivElement>> = useRef<
    Map<string, HTMLDivElement>
  >(new Map<string, HTMLDivElement>())
  const [isBusy, setIsBusy] = useState<boolean>(false)
  let timeoutId: globalThis.Timer

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const reviews: Map<string, HTMLDivElement> = reviewsRef.current as Map<
      string,
      HTMLDivElement
    >
    for (const node of [...reviews.values()].reverse()) {
      const newReview = node.cloneNode(true)
      carousel.prepend(newReview)
    }
  }, [])

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const reviewsNode: Map<string, HTMLDivElement> = reviewsRef.current as Map<
      string,
      HTMLDivElement
    >
    const reviewNode: HTMLDivElement = reviewsNode.get(
      reviews[0].description,
    ) as HTMLDivElement
    const interval = setInterval(() => {
      if (!isBusy) {
        carousel.scrollLeft += reviewNode.clientWidth
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  function ScrollEvent(): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const reviewsNode: Map<string, HTMLDivElement> = reviewsRef.current as Map<
      string,
      HTMLDivElement
    >
    const reviewNode: HTMLDivElement = reviewsNode.get(
      reviews[0].description,
    ) as HTMLDivElement
    const maxScrollLeft: number = carousel.scrollWidth - carousel.clientWidth
    const scrollLeft: number = carousel.scrollLeft
    const buffer: number = reviewNode.clientWidth * 2

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      if (maxScrollLeft < scrollLeft + buffer) {
        for (const node of reviewsNode.values()) {
          const newReview = node.cloneNode(true)
          carousel.append(newReview)
          // TODO: Safari works correctly with remove()
          // carousel.firstChild?.remove()
        }
      }
      if (scrollLeft < buffer) {
        for (const node of [...reviewsNode.values()].reverse()) {
          const newReview = node.cloneNode(true)
          carousel.prepend(newReview)
          // TODO: Safari works correctly with remove()
          // carousel.lastChild?.remove()
        }
      }
    }, 100)
  }

  return (
    <div
      ref={carouselRef}
      role="img"
      className="flex gap-2 overflow-x-scroll relative scroll-smooth snap-mandatory snap-x w-full"
      onMouseEnter={() => setIsBusy(true)}
      onMouseLeave={() => setIsBusy(false)}
      onTouchStart={() => setIsBusy(true)}
      onTouchEnd={() => setIsBusy(false)}
      onScroll={() => ScrollEvent()}
      style={{ scrollbarWidth: "none" }}
    >
      <ScrollRightHint />
      {reviews.map((review) => (
        <div
          key={review.description}
          ref={(node: HTMLDivElement) => {
            reviewsRef.current?.set(review.description, node)
            return () => {
              reviewsRef.current?.delete(review.description)
            }
          }}
          className="bg-blue-100 flex flex-col flex-none justify-between m-2 p-2 rounded-2xl shadow-lg snap-center text-sm w-56"
        >
          <p className="whitespace-pre">{review.description}</p>
          <p className="flex gap-1 items-center justify-center">
            <UserCircleIcon className="size-6 text-rose-400" />
            {review.areaAndUser}
          </p>
        </div>
      ))}
    </div>
  )
}

function ScrollRightHint(): JSX.Element {
  return (
    <OpacityZero className="absolute bg-black/60 left-1/2 pt-20 text-white top-1/2 z-10 -translate-y-1/2">
      <ChevronRightIcon className="scroll-right size-20" />
      <ChevronRightIcon className="scroll-right size-20" />
      <ChevronRightIcon className="scroll-right size-20" />
      <span className="px-2 text-xs">右スクロール</span>
    </OpacityZero>
  )
}
