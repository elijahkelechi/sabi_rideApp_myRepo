import React from "react";
import { SvgXml } from "react-native-svg";
import * as svg from "@/constants/svg/icons";

export const PersonAddIcon = ({ width, height, color }) => {
    return (
        <SvgXml
            xml={svg.personAdd}
            width={width}
            height={height}
            color={color}
        />
    );
};

export const PersonSettingsIcon = ({ width, height, color }) => {
    return (
        <SvgXml
            xml={svg.personSettings}
            width={width}
            height={height}
            color={color}
        />
    );
};

export const CardIcon = ({ width, height, color }) => {
    return (
        <SvgXml xml={svg.card} width={width} height={height} color={color} />
    );
};

export const WalletIcon = ({ width, height, color }) => {
    return (
        <SvgXml xml={svg.wallet} width={width} height={height} color={color} />
    );
};

export const WithdrawalIcon = ({ width, height, color }) => {
    return (
        <SvgXml
            xml={svg.withdrawal}
            width={width}
            height={height}
            color={color}
        />
    );
};

export const CarIcon = ({ width, height, color }) => {
    return <SvgXml xml={svg.car} width={width} height={height} color={color} />;
};

export const GroupIcon = ({ width, height, color }) => {
    return (
        <SvgXml xml={svg.group} width={width} height={height} color={color} />
    );
};

export const MasterCardIcon = ({ width, height, color }) => {
    return (
        <SvgXml
            xml={svg.mastercard}
            width={width}
            height={height}
            color={color}
        />
    );
};

export const SendIcon = ({ width, height, color }) => {
    return (
        <SvgXml xml={svg.send} width={width} height={height} color={color} />
    );
};

export const MicrophoneIcon = ({ width, height, color }) => {
    return (
        <SvgXml
            xml={svg.microphone}
            width={width}
            height={height}
            color={color}
        />
    );
};

export const VolumeIcon = ({ width, height, color }) => {
    return (
        <SvgXml xml={svg.volume} width={width} height={height} color={color} />
    );
};

export const VolumeOffIcon = ({ width, height, color }) => {
    return (
        <SvgXml
            xml={svg.volumeOff}
            width={width}
            height={height}
            color={color}
        />
    );
};

export const MicrophoneOffIcon = ({ width, height, color }) => {
    return (
        <SvgXml
            xml={svg.microphoneOff}
            width={width}
            height={height}
            color={color}
        />
    );
};

export const CashIcon = ({ width, height, color }) => {
    return (
        <SvgXml xml={svg.cash} width={width} height={height} color={color} />
    );
};
