import React from 'react'
import * as S from './styled'

function RepositoryItem({ name, linkToRepos, fullName }) {
    return (
        <S.Wrapper>
            <S.WrapperTitle>{name}</S.WrapperTitle>
            <S.WrapperFullName>full name:</S.WrapperFullName>
            <S.WrapperLink href={linkToRepos} tWrapperLinkrget='_blank' rel='noreferrer'>{fullName}</S.WrapperLink>

        </S.Wrapper>
    )
}

export default RepositoryItem