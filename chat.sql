/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : chat

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-04-08 10:39:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for chat_list
-- ----------------------------
DROP TABLE IF EXISTS `chat_list`;
CREATE TABLE `chat_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` datetime DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `friendid` int(11) DEFAULT NULL,
  `friendname` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of chat_list
-- ----------------------------

-- ----------------------------
-- Table structure for friendlist
-- ----------------------------
DROP TABLE IF EXISTS `friendlist`;
CREATE TABLE `friendlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `friendname` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `friendid` int(11) DEFAULT NULL,
  `friendhead` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `mood` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of friendlist
-- ----------------------------
INSERT INTO `friendlist` VALUES ('1', '王力宏', '1', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554115084110&di=59c730ac9403d08c96088f8bbe06cf7c&imgtype=0&src=http%3A%2F%2Fcdn2.lieqikankan.com%2Fentment%2F2018-10-12%2F3a38129e5d7af8e65cf16a64f9992c65.jpg', '1', '爱很简单：一个你，一辈子，一心一意。');
INSERT INTO `friendlist` VALUES ('2', '李沁', '2', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554118737108&di=89a04c2dd090ad120ffda594bd48ce36&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F09%2F20151009195139_42sQF.thumb.700_0.jpeg', '2', '再遇见，彼此没变，只是身份不似从前。');
INSERT INTO `friendlist` VALUES ('3', '李沁', '1', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554118737108&di=89a04c2dd090ad120ffda594bd48ce36&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F09%2F20151009195139_42sQF.thumb.700_0.jpeg', '2', '再遇见，彼此没变，只是身份不似从前。');
INSERT INTO `friendlist` VALUES ('4', '王力宏', '2', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554115084110&di=59c730ac9403d08c96088f8bbe06cf7c&imgtype=0&src=http%3A%2F%2Fcdn2.lieqikankan.com%2Fentment%2F2018-10-12%2F3a38129e5d7af8e65cf16a64f9992c65.jpg', '1', '爱很简单：一个你，一辈子，一心一意。');
INSERT INTO `friendlist` VALUES ('5', '汪苏泷', '1', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554196589409&di=994f4e465cc75ac1b361124c21e0cdeb&imgtype=0&src=http%3A%2F%2Fcrawl.nosdn.127.net%2F1e69781637f8878393003439cd947d37.jpeg', '3', '抬头仰望天空，思念的泪水就不会掉下来');
INSERT INTO `friendlist` VALUES ('6', '汪苏泷', '2', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554196589409&di=994f4e465cc75ac1b361124c21e0cdeb&imgtype=0&src=http%3A%2F%2Fcrawl.nosdn.127.net%2F1e69781637f8878393003439cd947d37.jpeg', '3', '抬头仰望天空，思念的泪水就不会掉下来');
INSERT INTO `friendlist` VALUES ('7', '王力宏', '3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554115084110&di=59c730ac9403d08c96088f8bbe06cf7c&imgtype=0&src=http%3A%2F%2Fcdn2.lieqikankan.com%2Fentment%2F2018-10-12%2F3a38129e5d7af8e65cf16a64f9992c65.jpg', '1', '爱很简单：一个你，一辈子，一心一意。');
INSERT INTO `friendlist` VALUES ('8', '李沁', '3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554118737108&di=89a04c2dd090ad120ffda594bd48ce36&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F09%2F20151009195139_42sQF.thumb.700_0.jpeg', '2', '再遇见，彼此没变，只是身份不似从前。');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `headimg` varchar(255) DEFAULT NULL,
  `moon` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'wlh', '123', '1', '王力宏', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554115084110&di=59c730ac9403d08c96088f8bbe06cf7c&imgtype=0&src=http%3A%2F%2Fcdn2.lieqikankan.com%2Fentment%2F2018-10-12%2F3a38129e5d7af8e65cf16a64f9992c65.jpg', '爱很简单：一个你，一辈子，一心一意。');
INSERT INTO `user` VALUES ('2', 'lq', '333', '1', '李沁', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554118737108&di=89a04c2dd090ad120ffda594bd48ce36&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F09%2F20151009195139_42sQF.thumb.700_0.jpeg', '再遇见，彼此没变，只是身份不似从前。');
INSERT INTO `user` VALUES ('3', 'wsl', '222', '1', '汪苏泷', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554196589409&di=994f4e465cc75ac1b361124c21e0cdeb&imgtype=0&src=http%3A%2F%2Fcrawl.nosdn.127.net%2F1e69781637f8878393003439cd947d37.jpeg', '抬头仰望天空，思念的泪水就不会掉下来');
INSERT INTO `user` VALUES ('4', null, null, null, null, null, null);
