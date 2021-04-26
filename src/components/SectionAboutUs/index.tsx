import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { sectionAboutUsProps } from 'types/api'

const SectionAboutUs = ({ title, authors }: sectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map((profile) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          role={profile.role}
          image={profile.photo}
          socialLinks={profile.socialLinks}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
