export const UNCHECKING_LINK = 'UNCHECKING_LINK';
export const CHECKING_LINK = 'CHECKING_LINK';

export const uncheckingLink = (checkedLinks) => ({
    type: UNCHECKING_LINK,
    payload: checkedLinks
});

export const checkingLink = (checkedLinks) => ({
    type: CHECKING_LINK,
    payload: checkedLinks
});
