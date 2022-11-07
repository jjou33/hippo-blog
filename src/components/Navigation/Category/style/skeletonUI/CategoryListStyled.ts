import styled from '@emotion/styled'
import SkeletonUI from 'styles/SkeletonUI'
export const CategoryListContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-right: 3px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

export const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
`
export const RootTitleWrapper = styled.div`
  display: flex;
  margin: 25px 10px 10px 0px;
  width: 100%;
`
export const CategoryRootIcon = styled(SkeletonUI)`
  margin: 0px 5px 10px 10px;
  width: 30px;
`
export const CategoryTitleIconWrapper = styled(SkeletonUI)`
  display: flex;
  border-radius: 50%;
  align-items: center;
  width: 25px;
  height: 25px;
  margin: -8px 8px 0 10px;
`

export const CategoryTitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 230px;
  height: 40px;
  margin: 10px 0 0 10px;
  border-radius: 5px;
`
export const CategoryRootItem = styled(SkeletonUI)`
  width: 100px;
`

export const CategoryTitleWrapper = styled.div`
  width: 400px;
`
export const CartegoryTitleText = styled(SkeletonUI)`
  cursor: pointer;
  flex-grow: 1;
  align-items: center;
  width: 100px;
  margin: -8px 8px 0 0px;
`
