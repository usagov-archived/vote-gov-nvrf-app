import { IconList, IconListItem, IconListContent, IconListIcon, IconListTitle } from '@trussworks/react-uswds';
import DOMPurify from "dompurify";

function StepsList(props) {
    const content = props.content;
    const contentBody = DOMPurify.sanitize(content.body);

    const iconConfirmEligible =  <svg width="63" height="64" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M19.6856 18.7938C19.6856 23.0001 23.1075 26.4226 27.3145 26.4226C31.5215 26.4226 34.9441 23.0001 34.9441 18.7938C34.9441 18.213 34.8731 17.6493 34.7491 17.1052C34.7418 17.0611 34.731 17.019 34.7164 16.9774C33.8987 13.6459 30.895 11.1641 27.3148 11.1641C23.8156 11.1641 20.8661 13.5353 19.9712 16.7533C19.9389 16.8268 19.9196 16.9042 19.9116 16.9831C19.7689 17.5652 19.6855 18.1692 19.6855 18.7938L19.6856 18.7938ZM27.3145 24.8948C23.9504 24.8948 21.212 22.158 21.212 18.7938C21.212 18.3566 21.2602 17.9308 21.3484 17.5193C24.0287 15.6931 25.4254 16.1459 27.6886 16.8922C29.1278 17.3662 30.8959 17.9416 33.3574 17.9866C33.3929 18.2517 33.4173 18.5192 33.4173 18.7938C33.4176 22.158 30.6794 24.8947 27.3145 24.8947L27.3145 24.8948ZM27.3145 12.6917C29.8487 12.6917 32.026 14.245 32.9475 16.4484C30.9464 16.3543 29.4799 15.8743 28.1672 15.4418C26.3104 14.8293 24.646 14.2884 22.3815 15.2164C23.4922 13.6892 25.2872 12.6917 27.3145 12.6917Z" fill="#11385B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M13.3001 43.697C17.3174 45.1012 22.0517 45.8433 26.9889 45.8433C27.143 45.8433 27.2971 45.8423 27.4512 45.8411C27.6021 45.8423 27.7521 45.8433 27.9021 45.8433C30.9028 45.8433 33.8055 45.5716 36.5409 45.0432C38.1504 47.6001 41.0103 49.3116 44.2739 49.3116C49.296 49.3116 53.3818 45.2685 53.3818 40.2994C53.3818 35.3281 49.2961 31.2841 44.2739 31.2841C42.5774 31.2841 40.9926 31.7537 39.6307 32.5559C38.2675 30.5497 36.4008 28.9411 34.0618 27.7769C33.9556 27.7232 33.8373 27.6959 33.7178 27.6959H30.1844L24.3353 27.6953H21.1809C21.0613 27.6953 20.944 27.7232 20.8368 27.7763C15.847 30.2619 13.9242 34.2984 13.191 37.2478C12.4024 40.4206 12.781 42.99 12.7981 43.0979C12.84 43.374 13.0331 43.604 13.2998 43.6972L13.3001 43.697ZM51.8556 40.2993C51.8556 44.4352 48.4553 47.8 44.2744 47.8C41.1482 47.8 38.4586 45.9185 37.2993 43.2414C37.2917 43.2236 37.2838 43.206 37.2761 43.1878C37.1867 42.9751 37.1049 42.7583 37.0348 42.5365C37.0307 42.5233 37.0275 42.5098 37.0241 42.497C36.9622 42.2996 36.9112 42.0976 36.8668 41.894C36.8566 41.8485 36.8455 41.8036 36.8367 41.7578C36.7948 41.5495 36.7625 41.338 36.7384 41.1244C36.733 41.0767 36.7288 41.0287 36.725 40.9804C36.7041 40.7561 36.6902 40.5292 36.6902 40.2996C36.6902 40.0703 36.7041 39.8444 36.7247 39.6204C36.7292 39.5727 36.733 39.525 36.738 39.4773C36.7609 39.274 36.7926 39.0735 36.8313 38.8749C36.8439 38.8084 36.8595 38.7419 36.8744 38.6751C36.9134 38.5007 36.9575 38.3284 37.0088 38.1584C37.0317 38.0834 37.0567 38.0087 37.0821 37.9344C37.13 37.7926 37.1817 37.653 37.2381 37.5146C37.2654 37.4472 37.2917 37.3788 37.3212 37.3123C37.3976 37.1388 37.4813 36.9681 37.5704 36.8018C37.5996 36.7466 37.631 36.6926 37.6614 36.638C37.7638 36.4586 37.8691 36.281 37.9855 36.111C37.989 36.106 37.9928 36.1016 37.9959 36.0962C38.1237 35.9096 38.261 35.7298 38.4047 35.555C38.4155 35.5415 38.4266 35.5281 38.4373 35.5149C39.8297 33.8553 41.9295 32.7961 44.2747 32.7961C48.4546 32.7957 51.8556 36.1614 51.8556 40.2993ZM29.2123 29.207L28.5603 31.8574H25.991L25.3168 29.207H29.2123ZM14.6745 37.6087C15.6163 33.8255 17.866 30.9994 21.3645 29.207H23.7405L24.6547 32.7973C24.7404 33.1327 25.0451 33.3686 25.3961 33.3686H29.16C29.512 33.3686 29.8186 33.1308 29.9029 32.7916L30.7839 29.2069H33.5347C35.5704 30.2507 37.1981 31.6653 38.3846 33.42C38.3802 33.4282 38.3754 33.4363 38.371 33.4442C36.4108 35.0988 35.162 37.5556 35.162 40.2989C35.162 41.4358 35.3846 42.5198 35.7753 43.5228C35.7892 43.5636 35.7959 43.6035 35.8127 43.6449C33.301 44.101 30.646 44.3316 27.9028 44.3316C27.7557 44.3316 27.6063 44.3307 27.4582 44.3294H27.4446C27.2927 44.3304 27.1415 44.3316 26.9896 44.3316C22.4088 44.3316 18.0204 43.6737 14.2628 42.426C14.1972 41.61 14.141 39.7558 14.6747 37.6087L14.6745 37.6087Z" fill="#11385B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M42.4036 44.0298C42.5491 44.165 42.7355 44.2318 42.9221 44.2318C43.1185 44.2318 43.313 44.1584 43.4607 44.0117L49.0264 38.5215C49.3237 38.2275 49.3237 37.7518 49.0273 37.4584C48.7294 37.165 48.2464 37.165 47.95 37.4581L42.904 42.4351L40.9942 40.6818C40.6864 40.3987 40.2044 40.4159 39.9171 40.7199C39.6309 41.0236 39.6473 41.5 39.9551 41.7821L42.4036 44.0298Z" fill="#11385B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M27.4754 37.8736C28.0863 37.8736 28.5865 37.3738 28.5865 36.7627C28.5865 36.1486 28.0863 35.6484 27.4754 35.6484C26.8609 35.6484 26.3613 36.1483 26.3613 36.7627C26.3617 37.3739 26.8609 37.8736 27.4754 37.8736Z" fill="#11385B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M27.4754 42.0011C28.0863 42.0011 28.5865 41.5726 28.5865 41.0459C28.5865 40.5223 28.0863 40.0938 27.4754 40.0938C26.8609 40.0938 26.3613 40.5222 26.3613 41.0459C26.3617 41.5729 26.8609 42.0011 27.4754 42.0011Z" fill="#11385B"/>
    </svg>

    const iconCheckmark = <svg width="63" height="64" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 32C16.5 24.0095 23.0095 17.5 31 17.5C38.9905 17.5 45.5 24.0095 45.5 32C45.5 39.9905 38.9905 46.5 31 46.5C23.0095 46.5 16.5 39.9905 16.5 32ZM18.5 32C18.5 38.9095 24.0905 44.5 31 44.5C37.9095 44.5 43.5 38.9095 43.5 32C43.5 25.0905 37.9095 19.5 31 19.5C24.0905 19.5 18.5 25.0905 18.5 32Z" fill="#11385B" stroke="white"/>
    <path d="M29.4241 34.4536L24.2412 29.1967L22 31.4699L29.4241 39L40 28.2732L37.7588 26L29.4241 34.4536Z" fill="#11385B"/>
    </svg>

    const iconSendForm = <svg width="63" height="64" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M24.2468 30.4951C24.2468 30.2083 24.4794 29.9748 24.7671 29.9748H38.6693C38.957 29.9748 39.1896 30.2083 39.1896 30.4951C39.1896 30.7822 38.957 31.0154 38.6693 31.0154H24.7671C24.4794 31.0154 24.2468 30.7822 24.2468 30.4951ZM24.2468 26.7303C24.2468 26.4433 24.4794 26.21 24.7671 26.21H38.6693C38.957 26.21 39.1896 26.4433 39.1896 26.7303C39.1896 27.018 38.957 27.2506 38.6693 27.2506L24.7671 27.2504C24.4794 27.2504 24.2468 27.018 24.2468 26.7303ZM24.2468 22.9664C24.2468 22.6787 24.4794 22.4461 24.7671 22.4461H38.6693C38.957 22.4461 39.1896 22.6787 39.1896 22.9664C39.1896 23.2535 38.957 23.4868 38.6693 23.4868L24.7671 23.4865C24.4794 23.4865 24.2468 23.2535 24.2468 22.9664ZM24.2468 19.2014C24.2468 18.9144 24.4794 18.6811 24.7671 18.6811H32.5267C32.8137 18.6811 33.0466 18.9144 33.0466 19.2014C33.0466 19.4885 32.8137 19.7218 32.5267 19.7218H24.7671C24.4794 19.7218 24.2468 19.4885 24.2468 19.2014ZM17.9408 45.1932L27.8825 34.82L31.5314 36.2286L31.7188 36.3008L35.453 34.8589L45.0304 45.1941L17.9576 45.1939C17.9513 45.1939 17.9461 45.193 17.9406 45.193L17.9408 45.1932ZM20.8199 30.9772L18.0009 29.8884L20.8199 28.4646V30.9772ZM17.2413 44.4197L26.8305 34.4142L17.2413 30.7107V30.7131V44.4197ZM22.9138 16.2396C22.3326 16.2396 21.8604 16.7114 21.8604 17.2921V31.3793L31.7183 35.1859L41.5766 31.3793V21.394C41.5766 21.2753 41.5648 21.162 41.5425 21.0545L37.8011 21.0542C37.2285 21.0542 36.7618 20.5875 36.7618 20.0149V16.2731C36.6535 16.2513 36.5412 16.2399 36.4222 16.2399L22.9138 16.2396ZM40.8406 20.0131L37.8026 20.0146V16.9748L40.8406 20.0131ZM45.436 29.8882L42.617 30.9769V28.4642L45.436 29.8882ZM46.1957 30.7126V30.7102L36.4968 34.4559L46.1056 44.8241C46.1622 44.722 46.1954 44.6031 46.1954 44.4778L46.1957 30.7126ZM46.272 29.1443L42.6172 27.2983V21.3936C42.6172 20.6802 42.3618 20.0622 41.8565 19.5573L38.2584 15.9592C37.754 15.4548 37.1359 15.1992 36.4225 15.1992H22.9138C21.7593 15.1992 20.8196 16.1382 20.8196 17.2926V27.2992L17.165 29.1452C16.5607 29.4504 16.2002 30.037 16.2002 30.7136V44.478C16.2002 45.4472 16.9888 46.2353 17.9573 46.2353H45.479C46.4481 46.2353 47.2363 45.4467 47.2363 44.478V30.7125C47.2363 30.0359 46.8753 29.4495 46.2717 29.1443L46.272 29.1443Z" fill="#11385B"/>
    </svg>

    const iconCompleteForm = <svg width="63" height="64" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.7605 43.6743L37.3887 40.3133L38.9283 38.7737L40.7605 40.6168L43.8937 37.4727L45.4334 39.0123L40.7605 43.6743Z" fill="#11385B"/>
    <path d="M30.5689 47.998H21.8955C18.9031 47.998 16.4746 45.5695 16.4746 42.5771V20.8936C16.4746 17.9012 18.9031 15.4727 21.8955 15.4727H39.2424C42.2348 15.4727 44.6633 17.9012 44.6633 20.8936V29.567H42.4949V20.8936C42.4949 19.1047 41.0313 17.641 39.2424 17.641H21.8955C20.1066 17.641 18.643 19.1047 18.643 20.8936V42.5771C18.643 44.366 20.1066 45.8297 21.8955 45.8297H30.5689V47.998Z" fill="#11385B"/>
    <path d="M45.7473 47.9988H37.0738C35.2849 47.9988 33.8213 46.5352 33.8213 44.7463V36.0729C33.8213 34.284 35.2849 32.8203 37.0738 32.8203H45.7473C47.5362 32.8203 48.9998 34.284 48.9998 36.0729V44.7463C48.9998 46.5352 47.5362 47.9988 45.7473 47.9988ZM37.0738 34.9887C36.4775 34.9887 35.9896 35.4766 35.9896 36.0729V44.7463C35.9896 45.3426 36.4775 45.8305 37.0738 45.8305H45.7473C46.3436 45.8305 46.8314 45.3426 46.8314 44.7463V36.0729C46.8314 35.4766 46.3436 34.9887 45.7473 34.9887H37.0738Z" fill="#11385B"/>
    <path d="M21.8955 21.9727H39.2424V24.141H21.8955V21.9727Z" fill="#11385B"/>
    <path d="M21.8955 38.2419H30.5689V40.4103H21.8955V38.2419Z" fill="#11385B"/>
    <path d="M21.8955 27.3984H39.2424V29.5668H21.8955V27.3984Z" fill="#11385B"/>
    <path d="M21.8955 32.8203H30.5689V34.9887H21.8955V32.8203Z" fill="#11385B"/>
    </svg>


    return (
        <>
            <h2>{content.heading}</h2>
            <div dangerouslySetInnerHTML= {{__html: contentBody}}/>
            {/*
            <IconList className="usa-icon-list--size-lg padding-top-1 padding-bottom-5">
                <IconListItem className="margin-105">
                    <IconListIcon className="text-primary-dark">
                    <div className="text-primary-dark usa-icon-list__icon" data-testid="iconListIcon">
                        {iconConfirmEligible}
                    </div>
                    </IconListIcon>
                    <IconListContent>
                    <IconListTitle type="h3">{"List Item 1"}</IconListTitle>
                    <p>
                        {"text"}
                    </p>
                    </IconListContent>
                </IconListItem>
                <IconListItem className="margin-105">
                    <IconListIcon className="text-primary-dark">
                    <div className="text-primary-dark usa-icon-list__icon" data-testid="iconListIcon">
                        {iconCompleteForm}
                    </div>
                    </IconListIcon>
                    <IconListContent>
                    <IconListTitle type="h3">{"List item 2"}</IconListTitle>
                    <p>
                        {"text"}
                    </p>
                    </IconListContent>
                </IconListItem>
                <IconListItem className="margin-105">
                    <IconListIcon className="text-primary-dark">
                    <div className="text-primary-dark usa-icon-list__icon" data-testid="iconListIcon">
                        {iconCheckmark}
                    </div>
                    </IconListIcon>
                    <IconListContent>
                    <IconListTitle type="h3">{"List Item 3"}</IconListTitle>
                    <p>
                        {"text"}
                    </p>
                    </IconListContent>
                </IconListItem>
                <IconListItem className="margin-105">
                    <IconListIcon className="text-primary-dark">
                    <div className="text-primary-dark usa-icon-list__icon" data-testid="iconListIcon">
                        {iconSendForm}
                    </div>
                    </IconListIcon>
                    <IconListContent>
                    <IconListTitle type="h3">{"List item 4"}</IconListTitle>
                    <p>
                        {"text"}
                    </p>
                    </IconListContent>
                </IconListItem>
    </IconList> */}
        </>
    );
}

export default StepsList;
