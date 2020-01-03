import { Treebeard, decorators } from 'react-treebeard';
import React from 'react';
import AppWindow from '../../Window/Window';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import FileIcon, { defaultStyles } from 'react-file-icon';

import './FileExplorer.scss';
import { getFileExtension } from '../../../utils/utils';

const data = {
    name: 'Samples',
    toggled: true,
    children: [
        {
            name: 'parent',
            children: [
                { name: 'kick.wav' },
                { name: 'snare.mp3' }
            ]
        },
        {
            name: 'loading parent',
            children: [
                { name: 'main.js' },
                { name: 'test.ts' }
            ]
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
};

export function FileExplHeader({ onSelect, style, customStyles, node }) {
    const isFolder = node.children;
    let icon = () => <FontAwesomeIcon icon={faFolder} />;
    if (!isFolder) {
        let extension = getFileExtension(node.name);
        icon = () => <FileIcon size="15px" extension={extension} {...defaultStyles[extension]} />
    }

    return (
        <div style={style.base} onClick={onSelect}>
            <div style={node.selected ? { ...style.title, ...customStyles.header.title } : style.title}>
                {icon()}
                <span style={{ marginLeft: '8px' }}>{node.name}</span>
            </div>
        </div>
    );
}

export function Toggle({ style, onClick }) {
    return (
        <div style={{ ...style.base, position: 'relative' }} className="center" onClick={onClick}>
            <FontAwesomeIcon icon={faCaretRight} />
        </div>
    );
};

export default class FileExplorer extends React.PureComponent<any, any> {
    constructor(props) {
        super(props);
        this.state = { data };
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(node, toggled) {
        const { cursor, data } = this.state;
        if (cursor) {
            this.setState(() => ({ cursor, active: false }));
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        this.setState(() => ({ cursor: node, data: Object.assign({}, data) }));
    }

    render() {
        return (
            <AppWindow
                width={200}
                minWidth={200}
                height={300}
                minHeight={200}
                maxHeight='100%'
                x={5}
                y={5}
                className="file-explorer" title="FileExplorer" style={{ minWidth: '350px' }}>
                <Treebeard
                    data={data}
                    onToggle={this.onToggle}
                    decorators={{ ...decorators, Header: FileExplHeader, Toggle }}
                />
            </AppWindow>
        )
    }
}