import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { pricingBoxProps } from 'types/api'
import { numberToFormatPrice } from 'utils/formatPrice'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  totalPrice,
  numberInstallments,
  priceInstalments,
  benefits,
  realPrice,
  button
}: pricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>{numberToFormatPrice(totalPrice, 0)}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{`${numberInstallments}x de`}</span>{' '}
        {`${numberToFormatPrice(priceInstalments, 0)}`}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList
      dangerouslySetInnerHTML={{ __html: benefits }}
    ></S.BenefitsList>

    <Button href={button.url} onClick={onClick} withPrice>
      <p>{button.label}</p>
      <div>
        <S.ButtonFullPrice>
          {numberToFormatPrice(totalPrice, 0)}
        </S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          {numberToFormatPrice(realPrice, 0)}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
