import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { getImageURL } from 'utils/getImageUrl'

import * as S from './styles'

type Props = {
  id: number
  name: string
  image: {
    url: string
  }
  description: string
}

const ReviewCard: React.FC<Props> = ({ id, name, image, description }) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        <S.Image>
          <source srcSet={getImageURL(image.url)} type="image/webp" />
          <source srcSet={getImageURL(image.url)} type="image/jpg" />
          <img src={getImageURL(image.url)} loading="lazy" alt={name} />
        </S.Image>
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="description">{description}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard
