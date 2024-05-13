import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const useData = (accion, nombreLocalStorage = '') => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        let dat = [];

        if(nombreLocalStorage != ''){
            dat = localStorage.getItem(nombreLocalStorage) && JSON.parse(localStorage.getItem(nombreLocalStorage));
        
            if (!dat){
                accion()
                .then( datos => {
                    if ( datos ) {
                            localStorage.setItem(nombreLocalStorage, JSON.stringify(datos));

                        setState({
                            data: datos,
                            loading: false
                        })    
                    }
                })
            }else
                setState({
                    data: dat,
                    loading: false
                })  
        }else{
            accion()
            .then( datos => {
                    setState({
                        data: datos,
                        loading: false
                    })
            })
        }
    }, [])    
    return state
}

useData.propTypes = {
    // accion: PropTypes.func.isRequired
}