import React from 'react'
import * as S from './styled'

function Profile() {
    return (
        <S.Wrapper>
            <S.WrapperImage src='https://avatars.githubusercontent.com/u/63025931?v=4' alt="users avatar" />
            <S.WrapperInfoUser>
                <div>
                    <h1>Alexis Matos</h1>
                    <S.WrapperUsername>
                        <h3>Username:</h3>
                        <a href='https://github.com/alexisxz' target='_blank' rel='noreferrer'>alexisxz</a>
                    </S.WrapperUsername>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starred</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    );
}

export default Profile