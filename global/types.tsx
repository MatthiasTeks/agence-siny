import { Dispatch, SetStateAction } from "react";

export interface MarqueeServicesTypes {
    image: string;
    title: string;
    resume: string;
}

export interface DevelopperType {
    image: string;
    name: string;
    title: string;
    resume: string;
    delay: number;
}

export interface PilotageType {
    image: string;
    title: string;
    resume: string;
    delay: number;
}

export interface ReseauxType {
    image: string;
    title: string;
    delay: number;
}

export interface AccordionType {
    title: string;
    accordion: number;
    setAccordion: Dispatch<SetStateAction<number>>;
    resume: string;
    index: number;
}

export interface DeviceContact {
    idDevice: string;
}
