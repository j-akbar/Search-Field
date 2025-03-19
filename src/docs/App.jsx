import React, { Component } from 'react';
import GitHubButton from 'react-github-btn';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import TypeChecker from 'typeco';

import SearchField from '../components/SearchField';
import exampleSnippets from './exampleSnippets';
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';

import { FaRegStar, FaStar } from "react-icons/fa";
        

import './App.css';

const exampleList = [
  {
    name: 'Maimunah',
    task: [{
      name: 'Agama Islam',
      description: 'Dasar pembelajaran agama Islam Al-Quran dan Hadis, Akidah, Akhlak, Fikih, Sejarah Peradaban Islam',
      point: 12,
    },{
      name: 'Ilmu pengetahuan Sosial',
      description: 'IPS adalah sekelompok disiplin akademis yang mempelajari aspek-aspek yang berhubungan dengan manusia dan lingkungan sosialnya',
      point: 23,
    },{
      name: 'Ilmu pengetahuan Alam',
      description: 'Pembelajaran ilmu pengetahuan alam merupakan konsep pembelajaran sains dengan situasi lebih alami dan situasi dunia nyata siswa serta mendorong siswa membuat hubungan antar cabang sains dan antara pengetahuan yang dimiliki oleh siswa dengan kehidupan sehari-hari',
      point: 8,
    }],
  },
  {
    name: 'Karwanto',
    task: [{
      name: 'Ilmu pengetahuan Sosial',
      description: 'IPS adalah sekelompok disiplin akademis yang mempelajari aspek-aspek yang berhubungan dengan manusia dan lingkungan sosialnya',
      point: 54,
    },{
      name: 'Fisika',
      description: 'Pembelajaran fisika adalah proses belajar mengenai gejala alam dan interaksinya, serta hubungan antara keduanya. Pembelajaran fisika bertujuan untuk mengembangkan kemampuan berpikir peserta didik.',
      point: 32,
    }],
  },
  {
    name: 'Dandi',
    task: [{
      name: 'Ilmu pengetahuan Sosial',
      description: 'IPS adalah sekelompok disiplin akademis yang mempelajari aspek-aspek yang berhubungan dengan manusia dan lingkungan sosialnya',
      point: 85,
    },{
      name: 'Agama Islam',
      description: 'Dasar pembelajaran agama Islam Al-Quran dan Hadis, Akidah, Akhlak, Fikih, Sejarah Peradaban Islam',
      point: 10,
    }],
  }
];

const getMatchedList = (searchText) => {
  if (TypeChecker.isEmpty(searchText)) return exampleList;
  return exampleList.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
};




const ExampleList = (props) => (
  <div>
    <div className="list-body">
      {
        props.list.map((item, index) => (
          <Panel toggleable className='panel-toggle'>
              <b>{item.name} </b> ({item.task.length})
              <Card className='card'>
              {(() => {
                const item_list = [];   
                for (let i = 0; i < item.task.length; i++) {
                  item_list.push(
                    <Card className='card2'>
                      <p><b>{item.task[i].name}</b></p>
                      {item.task[i].description}
                      <span className='star'>{item.task[i].point}<FaStar /></span>
                    </Card>
                  );
                }

                return (
                  <div>{item_list}</div>
                )
              })()}
              </Card>
            </Panel>
          ))
      }
    </div>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSearchClickExampleList: [...exampleList],
    };
    this.onSearchClickExample = this.onSearchClickExample.bind(this);
  }

  onSearchClickExample(value) {
    this.setState({
      onSearchClickExampleList: getMatchedList(value),
    });
  }

  render() {
    return (
      <div className="react-search-field">
        <div>
          <h5>Input Username </h5>
          <SearchField
            placeholder="Enter Username"
            onSearchClick={this.onSearchClickExample}
          />
          <ExampleList
            list={this.state.onSearchClickExampleList}
          />
        </div>
      </div>
    );
  }
}

export default App;
