import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Text,
  Heading,
  Spacer,
  Grid,
  FormControl,
  Input,
  Center,
  chakra,
  InputRightElement,
} from "@chakra-ui/react";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;

    this.pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
    this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

    this.pageNeighbours =
      typeof pageNeighbours === "number"
        ? Math.max(0, Math.min(pageNeighbours, 2))
        : 0;

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

    this.state = { currentPage: 1 };
  }

  componentDidMount() {
    this.gotoPage(1);
  }

  gotoPage = (page) => {
    const { onPageChanged = (f) => f } = this.props;

    const currentPage = Math.max(0, Math.min(page, this.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords,
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  handleClick = (page, evt) => {
    evt.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = (evt) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1);
  };

  handleMoveRight = (evt) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1);
  };

  fetchPageNumbers = () => {
    const totalPages = this.totalPages;
    const currentPage = this.state.currentPage;
    const pageNeighbours = this.pageNeighbours;

    const totalNumbers = this.pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  render() {
    if (!this.totalRecords) return null;

    if (this.totalPages === 1) return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();

    return (
      <Fragment>
        <nav aria-label="Pagination">
          <ul className="pagination">
            <HStack as={"nav"} spacing={4}>
              {pages.map((page, index) => {
                if (page === LEFT_PAGE)
                  return (
                    <Link
                      key={index}
                      className="page-item"
                      onClick={this.handleMoveLeft}
                      px={10}
                      py={2}
                      rounded={"md"}
                      _hover={{
                        textDecoration: "none",
                        bg: "#ed702d",
                        color: "white",
                      }}
                      href={"#"}
                      fontSize={"18px"}
                      color={"#ed702d"}
                      bg="#f2cca3"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </Link>
                  );

                if (page === RIGHT_PAGE)
                  return (
                    <Link
                      key={index}
                      className="page-item"
                      onClick={this.handleMoveRight}
                      px={10}
                      py={2}
                      rounded={"md"}
                      _hover={{
                        textDecoration: "none",
                        bg: "#ed702d",
                        color: "white",
                      }}
                      href={"#"}
                      fontSize={"18px"}
                      color={"#ed702d"}
                      bg="#f2cca3"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </Link>
                  );

                return (
                  <>
                    {(() => {
                      if (currentPage === page) {
                        return (
                          <Link
                            key={index}
                            className={`page-item${
                              currentPage === page ? " active" : ""
                            }`}
                            onClick={(e) => this.handleClick(page, e)}
                            px={10}
                            py={2}
                            rounded={"md"}
                            _hover={{
                              textDecoration: "none",
                              bg: "#ed702d",
                              color: "white",
                            }}
                            href={"#"}
                            fontSize={"18px"}
                            color={"white"}
                            bg="#ed702d"
                          >
                            <strong>{page}</strong>
                          </Link>
                        );
                      } else {
                        return (
                          <Link
                            key={index}
                            className={`page-item${
                              currentPage === page ? " active" : ""
                            }`}
                            onClick={(e) => this.handleClick(page, e)}
                            px={10}
                            py={2}
                            rounded={"md"}
                            _hover={{
                              textDecoration: "none",
                              bg: "#ed702d",
                              color: "white",
                            }}
                            href={"#"}
                            fontSize={"18px"}
                            color={"#ed702d"}
                            bg="#f2cca3"
                          >
                            <strong>{page}</strong>
                          </Link>
                        );
                      }
                    })()}
                  </>
                );
              })}
            </HStack>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func,
};

export default Pagination;
