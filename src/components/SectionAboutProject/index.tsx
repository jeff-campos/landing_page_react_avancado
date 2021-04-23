import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProjectProps } from 'types/api'
import { getImageURL } from 'utils/getImageUrl'

const SectionAboutProject = ({
  title,
  media,
  description
}: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source srcSet={getImageURL(media.url)} type="image/webp" />
          <source srcSet={getImageURL(media.url)} type="image/png" />
          <img
            src={getImageURL(media.url)}
            loading="lazy"
            alt={media.alternativeText}
          />
        </S.Image>
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
