import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Dialog from '../base/Dialog';
import Subtitle from '../text/Subtitle';
import { hasOnClose } from '../base/interfaces/component-props';
import { KeyMapDescriptions, KeyMap } from '../../config/hotkeys';
import Title from '../text/Title';

import { osName } from 'react-device-detect';
import { Input } from '../Forms/Input';
interface IRecipeProps extends hasOnClose {
  isOpen?: boolean;
  contentLabel?: string;
}
export default class HotkeyDialog extends React.Component<IRecipeProps, { sections: any[]; query: string }> {
  static defaultProps = {
    isOpen: false,
  };

  constructor(props) {
    super(props);
    const sections: any[] = [];

    for (let key in KeyMap) {
      sections.push({ name: key, keys: KeyMap[key] });
    }

    this.state = {
      sections: sections,
      query: '',
    };
  }

  render() {
    const filterItem = (keys, el) => {
      let hotkey = keys[el];
      let desc = KeyMapDescriptions[el];
      let queryLower = this.state.query.toLowerCase();
      return (
        hotkey.toLowerCase().includes(queryLower) ||
        el.toLowerCase().includes(queryLower) ||
        desc.toLowerCase().includes(queryLower)
      );
    };

    const filterSection = (section) => {
      let childMatches = Object.keys(section.keys).filter(filterItem.bind(this, section.keys)).length;
      return section.name.toLowerCase().includes(this.state.query.toLowerCase()) || childMatches;
    };

    console.log(osName);
    return (
      <Dialog style={{ top: '20%' }} isOpen={this.props.isOpen} onClose={this.props.onClose}>
        <div style={{ width: 'auto', minWidth: '150px' }}>
          <div className="space-between">
            <Title text="Hot Keys" />
            <Input
              value={this.state.query}
              placeholder="Search..."
              onChange={(query) => {
                console.log('query', query);
                this.setState({ query });
              }}
            />
          </div>
          <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={300}>
            {this.state.sections.filter(filterSection).map((section) => {
              return (
                <div
                  className="list"
                  key={section.name}
                  style={{
                    display: 'flex',
                    height: '100%',
                    paddingBottom: '20px',
                    flexDirection: 'column',
                    marginBottom: '15px',
                  }}
                >
                  <Subtitle className="upper" text={section.name} />
                  {Object.keys(section.keys)
                    .filter(filterItem.bind(this, section.keys))
                    .map((key) => {
                      let hotkey = section.keys[key];
                      let desc = KeyMapDescriptions[key];
                      return (
                        <div key={key} className="list-item space-between col-gray-light">
                          <strong className="text-small">{desc}</strong>
                          <code>{hotkey}</code>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </Scrollbars>
        </div>
      </Dialog>
    );
  }
}
