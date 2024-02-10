import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { InputPrimary } from './styled.inputDefault';

interface Props {
    onTextChange: (text: string) => void;
    hg?: string
}

export const InputDefault: React.FC<Props> = ({ onTextChange, hg }) => {
    const [text, setText] = useState<string>('');

    const handleTextChange = (value: string) => {
        setText(value);
        onTextChange(value);
    };

    return (
        <View>
            <InputPrimary
                hg={hg}
                value={text}
                onChangeText={handleTextChange}
            />
        </View>
    );
};