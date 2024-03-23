import {PackageItem, Images, DetailsCard, Title, Description} from './style'

const Packages = props => {
  const {packageData} = props
  const {name, imageUrl, description} = packageData

  return (
    <PackageItem>
      <Images src={imageUrl} alt={name} />

      <DetailsCard>
        <Title>{name}</Title>

        <Description>{description}</Description>
      </DetailsCard>
    </PackageItem>
  )
}

export default Packages
