import ReactGA from 'react-ga';

export const LogPage = () => {
    ReactGA.pageview(window.location.pathname + window.location.href);
}

export const LogEvent = (category, action, label) => {
    ReactGA.event({
        category: category,
        action: action, 
        label: label
    });
}