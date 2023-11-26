import React from "react"
import ContentLoader from "react-content-loader"

const CoinListSkeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'90vh'}
    backgroundColor="#ecebeb"
    foregroundColor="#ecebeb"
    {...props}
  >

    <rect x="calc(100% - 120px)" y="50" rx="10" ry="10" width="100" height="26" />
    <rect x="calc(100% - (160px + 120px))" y="50" rx="10" ry="10" width="150" height="26" />
    <rect x="calc(100% - ((160px * 2) + 120px))" y="50" rx="10" ry="10" width="150" height="26" />
    <rect x="calc(100% - ((160px * 3) + 120px))" y="50" rx="10" ry="10" width="150" height="26" />

    <rect x="5" y="100" rx="3" ry="3" width="100%" height="40" />
    <rect x="5" y="160" rx="3" ry="3" width="100%" height="40" />
    <rect x="5" y="220" rx="3" ry="3" width="100%" height="40" />
    <rect x="5" y="280" rx="3" ry="3" width="100%" height="40" />
    <rect x="5" y="340" rx="3" ry="3" width="100%" height="40" />
    <rect x="5" y="400" rx="3" ry="3" width="100%" height="40" />
    <rect x="5" y="460" rx="3" ry="3" width="100%" height="40" />
    <rect x="5" y="520" rx="3" ry="3" width="100%" height="40" />
    <rect x="5" y="580" rx="3" ry="3" width="100%" height="40" />
    <rect x="5" y="640" rx="3" ry="3" width="100%" height="40" />

    <rect x="calc(50% - 156px)" y="700" rx="3" ry="3" width="252" height="36" />

  </ContentLoader>
)

export default CoinListSkeleton