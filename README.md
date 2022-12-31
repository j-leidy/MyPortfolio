# John Leidy II Portfolio Website
## Built using React.js

This website is pretty straight forward. This is the implementation for Netlify. I am currently not using a backend, however I have a codebase with a backend fully implemented. 
That website is on a MERN stack. Below I will add some documentation on specific sections of the website I think are useful for others. Open to suggestions on ways to improve my implementation.

## Code Details Section:

### Lazy Load Implementation
#### JS File inside of your function component
```
const AboutTitleRef = useRef();
const [TitleVisible, setTitleVisible] = useState();

useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>{
        setTitleVisible(entry.isIntersecting)
        console.log(TitleVisible)
    });
    observer.observe(AboutTitleRef.current)
},[AboutTitleRef,TitleVisible]);     

return(
    <AboutTitle ref={AboutTitleRef} inView = {TitleVisible}>
        About
    </AboutTitle>
)
```
#### Styled Component for Title
```
export const AboutTitle = styled.div`
    transition: 3s all ease;
    opacity: ${(props) => (props.inView ? "1" : "0")};
`;

```

## Below are screenshots of the website:
<details>

<summary> Images </summary>

### Landing / Hero Section
![alt text](https://github.com/j-leidy/MyPortfolio/blob/main/src/Images/ScreenShotPortfolio.png)
### About Me
![alt text](https://github.com/j-leidy/MyPortfolio/blob/main/src/Images/ScreenShotAboutMe.png)
### Projects
![alt text](https://github.com/j-leidy/MyPortfolio/blob/main/src/Images/ScreenShotProjects.png)
### Degrees
![alt text](https://github.com/j-leidy/MyPortfolio/blob/main/src/Images/ScreenShotDegrees.png)
### Experience / Footer
![alt text](https://github.com/j-leidy/MyPortfolio/blob/main/src/Images/ScreenShotExperienceFooter.png)

</details>

## You can also directly visit the live website: 
https://leidydev.netlify.app/

__Thanks for stopping by!__


