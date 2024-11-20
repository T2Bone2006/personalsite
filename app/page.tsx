"use client"
import React, { useEffect, useState, useRef } from 'react'
import { vt323 } from './font';
import styles from "./terminal.module.scss"
import { useRouter } from "next/navigation";

const Loading = () => {

    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const inputRef = useRef<HTMLInputElement>(null);
    const [newPage, isNewPage] = useState(false)
    const [closingScreen, isClosingScreen] = useState(false)
    const router = useRouter();

    useEffect(() => {
      const inputElement = inputRef.current;
      if (inputElement) {
        inputElement.focus();
      }
    }, []);
  
    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target !== inputRef.current) {
        const inputElement = inputRef.current;
        if (inputElement) {
          inputElement.focus();
        }
      }
    };

    useEffect(() => {
        if (newPage) {
          setTimeout(() => {
            isClosingScreen(true)
            setTimeout(() => {
                router.push("/home")
            },1000)
          }, 2000);
        }
      }, [newPage]);
      
      return (
        
        <div
            onClick={handleOutsideClick}
            style={{ fontFamily: vt323.style.fontFamily}}
            className={`overflow-x-hidden overflow-scroll cursor-none p-10 fixed inset-0 bg-green-950 h-screen text-green-400 shadow-green-400 text-shadow-terminal text-3xl ${styles.loadingOverlay} ${closingScreen ? styles.animateShrink : ""}`}>
            <div className={`-z-10 ${styles.vignette}`}/>
            {/* <p> --------------------------- </p>
            <p>Type help for more commands</p>
            <p> --------------------------- </p> */}
            <p>taylor_burrows.exe | Version 23.01.06</p>
            <p>Ready...</p>
            <p> --------------------------- </p>
            <p> Type help for more commands </p>
            <div className="whitespace-pre-line">
                {output}
            </div>
            <span className="mr-2 text-green-400 shadow-green-400 text-shadow-terminal">$</span>
            <span>{input}</span><span className={styles.caret}>&nbsp;</span>
            <input
                ref={inputRef}
                autoFocus
                className={`text-green-400 shadow-green-400 text-shadow-terminal opacity-0 ${styles.inputBox}`}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                //
                onKeyDown={e => {
                    if(e.key === "Enter"){
                        let newOutput = ""
                        newOutput = output + ">" + input + "\n"
                        switch(input) {
                            case "help":
                                newOutput += "List of commands \n clear: Clear Terminal \n 88: Go forward in time\n"
                                break;
                            case "clear":
                                newOutput = ""
                                break;
                            case "88":
                                newOutput = "Going forward in time...\n"
                                isNewPage(true)
                                break;
                            default:
                                newOutput += "Unrecognised command\n"
                            
                        }
                        setOutput(newOutput)
                        setInput("")
                    }
                
                }}
            >
            </input>

        </div>
    )
}

export default Loading